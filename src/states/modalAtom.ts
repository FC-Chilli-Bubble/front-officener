import { atom } from 'recoil';

import { TModal } from '@/types/TModal';

export const modalAtom = atom<TModal>({
  key: 'globalModal',
  default: {
    isOpen: false,
    title: '',
    positive: '확인',
    positiveCallback: () => {}
  }
});
