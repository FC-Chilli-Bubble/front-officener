import { styled } from 'styled-components';

import { INPUT_REDERROR_MESSAGE } from '@/constants/commonUiData';
import IconCheck from '@/assets/ico_check.svg';

type ErrorRedIconType = 'wrong' | 'error' | 'correct' | 'none';

type TInputProps = {
  isType: string;
  label: string;
  placeholder: string;
  isRequired?: boolean;
  redErrorIcon?: ErrorRedIconType;
  errorMessage?: string;
  isValid?: boolean;
  value: string | number;
  name: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string | number) => void;
};

// isRequired prop이 true인 경우 라벨에 '*' 표시가 추가되고, 그렇지 않은 경우 라벨만 표시
const FormField = ({
  isType,
  label,
  isRequired = false,
  placeholder,
  redErrorIcon = 'none',
  errorMessage,
  isValid = false,
  value,
  onChange
}: TInputProps) => {
  return (
    <StyledLayout>
      {isRequired ? (
        <StyledLabel htmlFor="input-box">
          {label}
          <Required>*</Required>
        </StyledLabel>
      ) : (
        <RequiredLabel htmlFor="input-box">{label}</RequiredLabel>
      )}
      <StyledContainer>
        {redErrorIcon == 'none' ? (
          <StyledBox
            type={isType}
            placeholder={placeholder}
            id="input-box"
            name={isType}
            value={value}
            onChange={e => {
              onChange(e.target.value);
            }}
            required></StyledBox>
        ) : (
          <StyledErrorIBox
            redErrorIcon={redErrorIcon}
            type={isType}
            placeholder={placeholder}
            id="input-box"
            name={isType}
            value={value}
            onChange={e => {
              onChange(e.target.value);
            }}
            required></StyledErrorIBox>
        )}
        {isValid && (
          <StyledIcon
            src={IconCheck}
            alt="Valid"
          />
        )}
      </StyledContainer>
      {redErrorIcon !== 'none' && (
        <StyledIErrorMessage redErrorIcon={redErrorIcon}>
          <StyledImage
            src={INPUT_REDERROR_MESSAGE[redErrorIcon]}
            alt=""
          />
          {errorMessage}
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

const StyledBox = styled.input`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 13px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grayColor3};
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
const StyledErrorIBox = styled.input<{ redErrorIcon: ErrorRedIconType }>`
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
        return theme.colors.errorColor; // 빨간색 (wrong 또는 error)
      } else {
        return theme.colors.grayColor4; // 회색 (나머지)
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
`;

const StyledIcon = styled.img`
  position: absolute;
  color: ${({ theme }) => theme.colors.grayColor4};
  right: 17px;
  bottom: 14px;
  text-align: right;
  cursor: pointer;
`;

const StyledIErrorMessage = styled.span<{ redErrorIcon: ErrorRedIconType }>`
  display: flex;
  color: ${({ redErrorIcon, theme }) => {
    if (redErrorIcon === 'none') {
      return theme.colors.grayColor4;
    } else if (redErrorIcon === 'correct') {
      return theme.colors.successColor;
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
