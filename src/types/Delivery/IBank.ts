import { TBankKey } from '@/constants/banks';

export interface IBank {
  bankList: IBankInfo[];
}

export interface IBankInfo {
  id: number;
  name: TBankKey;
}
