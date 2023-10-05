import { atom } from 'recoil';

export const fcmTokenAtom = atom<string>({
  key: 'fcmTokenAtom',
  default: ''
});
