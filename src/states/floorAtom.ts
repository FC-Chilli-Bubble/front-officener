import { atom } from 'recoil';

export const floorAtom = atom<string[]>({
  key: 'floorAtom',
  default: []
});
