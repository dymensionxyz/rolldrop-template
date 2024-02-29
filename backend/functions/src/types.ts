export const AIRDROP_ELIGIBILITIES_DATABASE_PATH = 'airdrop-eligibilities';

export interface AirdropEligibility {
    key: string;
    address: string;
    weight: number;
    amount: number;
    claimed?: boolean;
    lowerCaseAddress: string;
}
