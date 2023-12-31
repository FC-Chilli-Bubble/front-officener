import { styled } from 'styled-components';
import Button from '@/components/Common/Button';
import OutlineButton from '@/components/Common/OutlineButton';
import { useModal } from '@/hooks/useModal';

const Modal = () => {
  const { modalState, closeModal } = useModal();

  const formatTitle = (title: string) => {
    return title.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const handleNegativeClick = (event?: React.MouseEvent<HTMLElement>) => {
    event?.stopPropagation();
    if (modalState.negativeCallback) {
      closeModal();
      modalState.negativeCallback();
      return;
    }
    closeModal();
  };

  const handlePositiveClick = (event?: React.MouseEvent<HTMLElement>) => {
    event?.stopPropagation();
    if (modalState.positiveCallback) {
      closeModal();
      modalState.positiveCallback();
      return;
    }
    closeModal();
  };

  return (
    <>
      {modalState.isOpen && (
        <StyledModalLayout>
          <StyledModalContainer onClick={closeModal}>
            <StyledModal
              onClick={e => {
                e.stopPropagation();
              }}>
              {modalState.title && <h2>{formatTitle(modalState.title)}</h2>}
              {modalState.content &&
                (typeof modalState.content === 'string' ? (
                  <StyledMessage>{modalState.content}</StyledMessage>
                ) : (
                  modalState.content
                ))}
              <StyledButtonBox>
                <Button
                  title={modalState.positive}
                  onClick={handlePositiveClick}
                  size="small"
                />
                {modalState.negative && (
                  <OutlineButton
                    title={modalState.negative}
                    onClick={handleNegativeClick}
                    size="small"
                  />
                )}
              </StyledButtonBox>
            </StyledModal>
          </StyledModalContainer>
        </StyledModalLayout>
      )}
    </>
  );
};

const StyledModalLayout = styled.div`
  width: 100%;
`;

const StyledModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.67);
  display: flex;
  justify-content: center;
  z-index: 9999;
`;

const StyledModal = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 27px 24px 11px;
  border-radius: 10px;
  text-align: center;
  width: 310px;
  margin: auto;

  h2 {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.grayColor6};
    line-height: 1.4rem;
  }
`;

const StyledMessage = styled.p`
  margin-top: 13px;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.grayColor5};
  white-space: pre-line;
`;

const StyledButtonBox = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 14px;
`;

export default Modal;
