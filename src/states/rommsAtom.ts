import { atom } from 'recoil';
import { IRoom } from '@/types/Delivery/IDeliveryList';
import { IChat } from '@/types/Delivery/IDeliveryChat';

export const roomsAtom = atom<IRoom[]>({
  key: 'roomsAtom',
  default: []
});

export const joinedRoomsAtom = atom<IRoom[]>({
  key: 'joinedRoomsAtom',
  default: []
});

export const myChatListAtom = atom<IChat[]>({
  key: 'myChatListAtom',
  default: []
});
