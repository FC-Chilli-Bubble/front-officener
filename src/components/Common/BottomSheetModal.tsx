import { styled } from 'styled-components';
import Sheet from 'react-modal-sheet';
import { useRecoilValue } from 'recoil';

import { modalInputFocusAtom } from '@/states/chatInputFocusAtom';

type TBottomSheetModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
};

const BottomSheetModal = ({ isOpen, onClose, children }: TBottomSheetModalProps) => {
  const inputFocus = useRecoilValue(modalInputFocusAtom);

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      detent="content-height"
      disableDrag={true}>
      <StyledBottomSheet inputFocus={inputFocus}>
        <Sheet.Header />
        <Sheet.Content>{children}</Sheet.Content>
      </StyledBottomSheet>
      <Sheet.Backdrop />
    </Sheet>
  );
};

const StyledBottomSheet = styled(Sheet.Container)<{ inputFocus: boolean }>`
  padding-bottom: 20px;
  max-width: 560px !important;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 20px 20px 0 0 !important;
  font-family: 'Pretendard Variable', sans-serif !important;
  @media (max-width: 500px) {
    top: ${({ inputFocus }) => (inputFocus ? '190px' : 'uset')};
  }
`;

export default BottomSheetModal;
