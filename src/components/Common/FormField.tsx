import { styled } from 'styled-components';

import { INPUT_ERROR_ICONS } from '@/constants/commonUiData';
import IconCheck from '@/assets/ico_check.svg';

type ErrorIconType = 'wrong' | 'error' | 'errorG' | 'correct' | 'none';

type TInputProps = {
  isType: string;
  label: string;
  placeholder: string;
  isRequired?: boolean;
  redErrorIcon?: ErrorIconType;
  errorMessage?: string;
  isValid?: boolean;
  value: string | number;
  name: string;
  maxLength?: number;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  // eslint-disable-next-line no-unused-vars
  onBlur?: (value: string) => void;
  disabled?: boolean;
};

// isRequired prop이 true인 경우 라벨에 '*' 표시가 추가되고, 그렇지 않은 경우 라벨만 표시
const FormField = ({
  name,
  isType,
  label,
  isRequired = false,
  placeholder,
  redErrorIcon = 'none',
  errorMessage,
  isValid = false,
  value,
  maxLength,
  onChange,
  onBlur,
  disabled = false
}: TInputProps) => {
  return (
    <StyledLayout>
      {isRequired ? (
        <StyledLabel htmlFor={isType}>
          {label}
          <Required>*</Required>
        </StyledLabel>
      ) : (
        <RequiredLabel htmlFor={isType}>{label}</RequiredLabel>
      )}
      <StyledContainer>
        <StyledErrorIBox
          disabled={disabled}
          redErrorIcon={redErrorIcon}
          type={isType}
          placeholder={placeholder}
          id={name}
          name={name}
          value={value}
          maxLength={maxLength}
          onChange={e => {
            onChange(e.target.value);
          }}
          onBlur={onBlur ? e => onBlur(e.target.value) : undefined}
          required></StyledErrorIBox>
        {!disabled && isValid && (
          <StyledIcon
            src={IconCheck}
            alt="Valid"
          />
        )}
      </StyledContainer>
      {redErrorIcon !== 'none' && (
        <StyledIErrorMessage redErrorIcon={redErrorIcon}>
          <StyledImage
            src={INPUT_ERROR_ICONS[redErrorIcon]}
            alt=""
          />
          <span>{errorMessage}</span>
        </StyledIErrorMessage>
      )}
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.grayColor5};
  line-height: normal;
`;

const RequiredLabel = styled.label`
  color: ${({ theme }) => theme.colors.grayColor5};
  font-weight: 400;
  line-height: normal;
`;

const Required = styled.span`
  color: ${({ theme }) => theme.colors.redColor0};
  margin-left: 5px;
`;

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledErrorIBox = styled.input<{ redErrorIcon: ErrorIconType; }>`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 13px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid
    ${({ redErrorIcon, theme }) => {
    if (redErrorIcon === 'wrong' || redErrorIcon === 'error') {
      return theme.colors.errorColor;
    }
    if (redErrorIcon === 'errorG' || redErrorIcon === 'none') {
      return theme.colors.grayColor4;
    } else {
      return theme.colors.successColor;
    }
  }};
  ::placeholder {
    color: ${({ theme }) => theme.colors.grayColor3};
  }
  &:focus {
    &::placeholder {
      color: transparent;
    }
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.grayColor4};
    border-color: ${({ theme }) => theme.colors.grayColor3};
  }
`;

const StyledIcon = styled.img`
  position: absolute;
  color: ${({ theme }) => theme.colors.grayColor4};
  right: 17px;
  bottom: 14px;
  text-align: right;
  cursor: pointer;
`;

const StyledIErrorMessage = styled.div<{ redErrorIcon: ErrorIconType; }>`
  display: flex;
  color: ${({ redErrorIcon, theme }) => {
    if (redErrorIcon === 'none') {
      return theme.colors.grayColor4;
    } else if (redErrorIcon === 'correct') {
      return theme.colors.successColor;
    } else if (redErrorIcon === 'errorG') {
      return theme.colors.grayColor4;
    } else {
      return theme.colors.errorColor;
    }
  }};
  font-size: 10px;
  font-style: normal;
  line-height: 15px; /* 150% */
`;

const StyledImage = styled.img`
  margin: 0 5px;
`;

export default FormField;
