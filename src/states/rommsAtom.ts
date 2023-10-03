import { atom } from 'recoil';
import { IRoom } from '@/types/Delivery/IDeliveryList';

export const roomsAtom = atom<IRoom[]>({
  key: 'roomsAtom',
  default: []
});
