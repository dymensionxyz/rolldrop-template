import { getFirestore } from 'firebase-admin/firestore';
import { logger } from 'firebase-functions';
import { onRequest } from 'firebase-functions/v2/https';
import { AIRDROP_ELIGIBILITIES_DATABASE_PATH, AirdropEligibility } from './types';

export const getEligibilityRequest = onRequest({ cors: true }, async (request, response) => {
    const address = String(request.query.address);
    if (!address) {
        response.status(400).json({ error: 'Missing address' });
        return;
    }
    const eligibility = await getEligibility(address);
    if (!eligibility) {
        response.status(404).json({ error: 'Address not eligible' });
        return;
    }
    response.status(200).json(eligibility);
});

export const claimAddressRequest = onRequest({ cors: true }, async (request, response) => {
    const address = String(request.body.address);
    if (!address) {
        response.status(400).json({ error: 'Missing address' });
        return;
    }
    const eligibility = await getEligibility(address);
    if (!eligibility) {
        response.status(404).json({ error: 'Address not eligible' });
        return;
    }
    if (eligibility.claimed) {
        response.status(200).json(eligibility);
        return;
    }
    const firestore = getFirestore();
    firestore.doc(`${AIRDROP_ELIGIBILITIES_DATABASE_PATH}/${eligibility.key}`)
        .update({ claimed: true })
        .catch((error) => {
            logger.error(`Can't claim address`, error);
            response.status(503).json({ error: `Can't claim address` });
        });
    response.status(200).json({ ...eligibility, claimed: true });
});

export const createEligibilityRequest = onRequest(async (request, response) => {
    const address = String(request.body.address);
    const weight = Number(request.body.weight) || 0;
    const amount = Number(request.body.amount) || 0;

    if (!address) {
        response.status(400).json({ error: 'Missing address' });
        return;
    }
    if (!weight) {
        response.status(400).json({ error: 'Missing weight' });
        return;
    }
    if (!amount) {
        response.status(400).json({ error: 'Missing amount' });
        return;
    }

    const firestore = getFirestore();
    const eligibility: Omit<AirdropEligibility, 'key'> = {
        address,
        weight,
        amount,
        lowerCaseAddress: address.toLowerCase(),
    };
    await firestore.collection(AIRDROP_ELIGIBILITIES_DATABASE_PATH).add(eligibility)
        .then((doc) => response.status(200).json({ ...eligibility, key: doc.id }))
        .catch((error) => {
            logger.error(`Can't create eligibility`, error);
            response.status(503).json({ error: `Can't create eligibility` });
        });
});

const getEligibility = async (address: string): Promise<AirdropEligibility | undefined> => {
    const firestore = getFirestore();
    return firestore
        .collection(AIRDROP_ELIGIBILITIES_DATABASE_PATH)
        .where('lowerCaseAddress', '==', address.toLowerCase())
        .get()
        .then((snapshot) => snapshot.docs[0])
        .then((doc) => doc && ({ ...doc.data(), key: doc.id }) as AirdropEligibility)
        .catch((error) => {
            logger.error(`Can't find airdrop eligibility`, error);
            return undefined;
        });
};
