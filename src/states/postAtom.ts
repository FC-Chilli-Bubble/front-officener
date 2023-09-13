import { IDeliveryPostRequest } from '@/types/Delivery/IDeliveryPostRequest';
import { atom } from 'recoil';

export const postAtom = atom<IDeliveryPostRequest>({
  key: 'postAtom',
  default: {
    storeName: '',
    storeLink: '',
    deliveryTip: null,
    tag: '',
    bank: '',
    account: '',
    closedTime: '',
    maximumNum: null,
    decription: ''
  }
});
