import { styled } from 'styled-components';



type ButtonSize = 'small' | 'normal';

type TSearchProps = {
  size?: ButtonSize;
  isType: string;
  title: string;
  label: string;
  placeholder: string;
  value: string;
  isValid?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  onClick: () => void;
};

// isRequired prop이 true인 경우 라벨에 '*' 표시가 추가되고, 그렇지 않은 경우 라벨만 표시
const FormFieldButton = ({
  isType, // 추가
  label,
  placeholder,
  value,
  onChange,
  size,
  title,
  isValid = false,
  onClick
}: TSearchProps) => {
  return (
    <StyledLayout>
      <StyledLabel htmlFor="input-box">{label}</StyledLabel>
      <StyledContainer>
        <StyledInputBox
          type={isType}
          placeholder={placeholder}
          id="input-box"
          value={value}
          onChange={e => {
            onChange(e.target.value);
          }}
          required></StyledInputBox>
        <StyledButtonBox
          size={size}
          title={title}
          isValid={isValid}
          onClick={onClick}>
          {title}
        </StyledButtonBox>
      </StyledContainer>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.grayColor5};
  font-weight: 400;
  line-height: normal;
`;

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

const StyledInputBox = styled.input`
  width: 100%;
  height: 48px;
  padding: 13px 24px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grayColor4};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayColor3};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.grayColor9};
    border: 1px solid ${({ theme }) => theme.colors.marinblueColor};
    &::placeholder {
      color: transparent;
    }
  }
  
`;

const StyledButtonBox = styled.button<TSearchProps>`
  width: 78px;
  height: ${({ size }) => (size === 'normal' ? '60px' : '48px')};
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isValid, theme }) =>
    isValid ? theme.colors.grayColor1 : theme.colors.ctaColor};
  color: ${({ isValid, theme }) => (isValid ? theme.colors.grayColor4 : theme.colors.white)};
  font-size: ${({ size }) => (size === 'normal' ? '20px' : '16px')};
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:active {
    background-color: ${({ isValid, theme }) =>
      isValid ? theme.colors.ctaPressedColor : theme.colors.ctaPressedColor};
  }

  /* &:disabled {
    color: ${({ isValid, theme }) =>
    isValid ? theme.colors.white : theme.colors.ctaDisabledColor};
    background-color: ${({ isValid, theme }) =>
    isValid ? theme.colors.ctaDisabledColor : theme.colors.primaryPressedColor};
  } */
`;

export default FormFieldButton;
