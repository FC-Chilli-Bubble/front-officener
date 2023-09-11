import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { TModal } from '@/types/TModal';
import { modalAtom } from '@/states/modalAtom';

export const useModal = () => {
  const [modalState, setModalState] = useRecoilState<TModal>(modalAtom);

  // 모달 Open
  const openModal = useCallback(
    (modal: TModal) => {
      setModalState({
        ...modal,
        isOpen: true
      });
    },
    [setModalState]
  );

  // 모달 Close
  const closeModal = useCallback(() => {
    setModalState(prev => {
      return { ...prev, isOpen: false };
    });
  }, [setModalState]);

  return {
    modalState,
    openModal,
    closeModal
  };
};
