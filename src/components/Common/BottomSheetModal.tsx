import { styled } from "styled-components";
import Sheet from 'react-modal-sheet';

type TBottomSheetModalProps = {
  isOpen: boolean,
  onClose: () => void,
  children: JSX.Element;
};

const BottomSheetModal = ({ isOpen, onClose, children }: TBottomSheetModalProps,) => {
  return (
    <Sheet isOpen={isOpen} onClose={onClose} detent="content-height" disableDrag={true}>
      <StyledBottomSheet>
        <Sheet.Header />
        <Sheet.Content>
          {children}
        </Sheet.Content>
      </StyledBottomSheet>
      <Sheet.Backdrop />
    </Sheet>
  );
};

const StyledBottomSheet = styled(Sheet.Container)`
    max-width: 560px !important;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 20px 20px 0 0 !important;
     font-family: "Pretendard Variable", sans-serif !important;
`;


export default BottomSheetModal;