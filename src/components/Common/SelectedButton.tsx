import { styled } from 'styled-components';


type TInputProps = {
  label?: string;
  placeholder: string;
  onClick: () => void;
};

const SelectedButton = ({ label, placeholder, onClick }: TInputProps) => {
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
    </InputLayout>
  );
};

const InputLayout = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  font-size: 16px;
`;

const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.grayColor6};
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
  font-size: 16px;
  text-align: right;
  cursor: pointer;
`;

export default SelectedButton;
