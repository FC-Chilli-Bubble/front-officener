import { styled } from 'styled-components';
import { INPUT_ERROR_MESSAGE } from '@/constants/commonUiData';


type ErrorIconType = "error" | "none";

type TheInputProps = {
  label?: string;  
  placeholder: string;
  errorIcon?: ErrorIconType;
}

const InputBar = ({label, placeholder,errorIcon = "none" }:TheInputProps ) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputBox placeholder={placeholder}></InputBox>
      <ErrorMessage>
        {errorIcon !== "none" && <img src={INPUT_ERROR_MESSAGE[errorIcon]} alt=""/>}
      </ErrorMessage>
      <span>변경</span>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const InputLabel = styled.span`
  color: ${({ theme }) => theme.colors.grayColor5};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const InputBox = styled.input`
  display: flex;
  width: 343px;
  height: 48px;
  padding: 13px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayColor1};
  ::placeholder {
    color: ${({ theme }) => theme.colors.grayColor4};
    font-size: 1.2em;
    font-style: italic;
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.grayColor5};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 150% */
`;


export default InputBar;