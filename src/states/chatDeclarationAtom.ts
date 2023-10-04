import { atom } from 'recoil';
import { IChatDeclarationData } from '@/types/Chatroom/IDeclarationData';

export const chatDeclarationDataAtom = atom<IChatDeclarationData>({
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
