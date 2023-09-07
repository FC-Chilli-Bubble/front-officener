import { styled } from 'styled-components';



const InputText = () => {
  return (
    <InputContainer>
      <InputLabel></InputLabel>
      <InputBox></InputBox>
    </InputContainer>
  );
};

const InputContainer = styled.input`
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

export default InputText;