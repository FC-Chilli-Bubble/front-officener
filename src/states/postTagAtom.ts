import { atom } from 'recoil';

export const postTagAtom = atom<string | null>({
  key: 'postTagAtom',
  default: null
});
