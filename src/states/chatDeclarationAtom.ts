import { atom } from 'recoil';

type TChatDeclarationDataAtom = {
  reportType: string;
  reportMessage: string;
  reportedUserId: number;
};

export const chatDeclarationDataAtom = atom<TChatDeclarationDataAtom>({
  key: 'chatDeclarationDataAtom',
  default: {
    reportType: '',
    reportMessage: '',
    reportedUserId: 0
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
