import { styled } from 'styled-components';

import { INPUT_ERROR_MESSAGE } from '@/constants/commonUiData';

type ErrorIconType = 'error' | 'none';

type TheInputProps = {
  label?: string;
  placeholder: string;
  errorIcon?: ErrorIconType;
  onClick: () => void;
};

const SelectedInput = ({ label, placeholder, errorIcon = 'none', onClick }: TheInputProps) => {
  return (
    <InputLayout>
      <InputLabel htmlFor="input-box">{label}</InputLabel>
      <InputContainer>
        <InputBox
          type="text"
          placeholder={placeholder}
          id="input-box"
          onClick={onClick}></InputBox>
        <InnerText>변경</InnerText>
      </InputContainer>
      {errorIcon !== 'none' && (
        <ErrorMessage>
          <StyledImage
            src={INPUT_ERROR_MESSAGE[errorIcon]}
            alt=""
          />
          입주사 목록에 내 회사가 없다면 관리센터로 문의 주세요!
        </ErrorMessage>
      )}
    </InputLayout>
  );
};

const InputLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  font-size: 16px;
`;

const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.grayColor5};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const InputBox = styled.input`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 13px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayColor1};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayColor4};
  }
`;

const InnerText = styled.span`
  position: absolute;
  color: ${({ theme }) => theme.colors.grayColor4};
  right: 17px;
  bottom: 17px;
  text-align: right;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  display: flex;
  color: ${({ theme }) => theme.colors.grayColor5};
  font-size: 10px;
  font-style: normal;
  line-height: 15px; /* 150% */
`;

const StyledImage = styled.img`
  margin: 0 5px;
`;

export default SelectedInput;
