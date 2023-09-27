import { TBankKey } from '@/constants/banks';

export interface IBank {
  banks: IBankInfo[];
}

export interface IBankInfo {
  bankName: TBankKey;
}
