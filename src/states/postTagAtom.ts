import { atom } from 'recoil';

export const postTagAtom = atom<string>({
  key: 'postTagAtom',
  default: ''
});
