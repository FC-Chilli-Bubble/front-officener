import { atom } from 'recoil';

type TChatDeclarationDataAtom = {
  userid: number;
  category: string;
  detail: string;
};

export const chatDeclarationDataAtom = atom<TChatDeclarationDataAtom>({
  key: 'chatDeclarationDataAtom',
  default: {
    userid: 0,
    category: '',
    detail: ''
  }
});

export const isDeclarationBottomsheetOpenAtom = atom<boolean>({
  key: 'isDeclarationBottomsheetOpenAtom',
  default: false
});

export const declarationStepAtom = atom<number>({
  key: 'declarationStepAtom',
  default: 1
});
