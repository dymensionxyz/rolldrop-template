import { initializeApp } from 'firebase-admin/app';
import { claimAddressRequest, createEligibilityRequest, getEligibilityRequest } from './airdtop';

initializeApp();

export {
    getEligibilityRequest,
    claimAddressRequest,
    createEligibilityRequest
};
