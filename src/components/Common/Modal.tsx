import { styled } from 'styled-components';
import OutlineButton from '@/components/Common/OutlineButton';
import Button from '@/components/Common/Button';
import { IModal } from '@/types/IModal';

type TModalProps = {
  data: IModal;
};

const Modal = ({ data }: TModalProps) => {
  return (
    <StyledModalLayout>
      <StyledModalContainer >
        <StyledModal>
          <h2>{data.title}</h2>
          {data.content && <p>{data.content}</p>}
          <StyledButtonBox>
            <Button title={data.positive} onClick={data.positiveCallback} size='small' />
            {data.negative && data.negativeCallback && <OutlineButton title={data.negative} onClick={data.negativeCallback} size='small' />}
          </StyledButtonBox>
        </StyledModal>
      </StyledModalContainer>
    </StyledModalLayout>
  );
};

const StyledModalLayout = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9999;
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
  }

  p {
    margin-top: 13px;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.grayColor5};
  }
`;

const StyledButtonBox = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 14px;
`;

export default Modal;