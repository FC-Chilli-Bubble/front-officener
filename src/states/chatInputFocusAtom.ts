import { atom } from 'recoil';

export const chatInputFocusAtom = atom<boolean>({
  key: 'chatInputFocusAtom',
  default: false
});
export const modalInputFocusAtom = atom<boolean>({
  key: 'modalInputFocusAtom',
  default: false
});
export const keyboardHeightAtom = atom<number>({
  key: 'keyboardHeightAtom',
  default: 0
});
export const isMobileAtom = atom<boolean>({
  key: 'isMobileAtom',
  default: false
});
