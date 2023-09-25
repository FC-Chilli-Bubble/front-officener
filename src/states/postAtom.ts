import { atom } from 'recoil';
import { IBankInfo } from '@/types/Delivery/IBank';
import { IDeliveryPostRequest } from '@/types/Delivery/IDeliveryPostRequest';

export const postAtom = atom<IDeliveryPostRequest>({
  key: 'postAtom',
  default: {
    storeName: '',
    menuLink: '',
    deliveryFee: null,
    foodTag: '',
    bankName: '',
    accountNumber: '',
    deadline: '',
    maxAttendees: null,
    desc: ''
  }
});

export const postBankAtom = atom<IBankInfo[]>({
  key: 'postBank',
  default: []
});
