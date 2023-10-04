import { atom } from 'recoil';

export const isBottomsheetOpenAtom = atom<boolean>({
  key: 'isBottomsheetOpenAtom',
  default: false
});
