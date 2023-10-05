import { atom } from 'recoil';

export const elevatorAtom = atom<number[]>({
  key: 'elevatorAtom',
  default: []
});
