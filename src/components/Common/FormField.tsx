import { styled, css } from 'styled-components';
import { INPUT_REDERROR_MESSAGE } from '@/constants/commonUiData';
import { INPUT_CHECK_ICONS } from '@/constants/commonUiData';

type ErrorRedIconType = 'error' | 'none';
type CheckIconType = 'check' | 'none';

type TheInputProps = {
  label: string;
  placeholder: string;
  isRequired?: boolean;
  redErrorIcon?: ErrorRedIconType;
  errorMessage?: string;
  checkIcon?: CheckIconType;
};

// isRequired prop이 true인 경우 라벨에 '*' 표시가 추가되고, 그렇지 않은 경우 라벨만 표시

const FormField = ({
  label,
  isRequired = false,
  placeholder,
  redErrorIcon = 'none',
  errorMessage,
  checkIcon = 'none'
}: TheInputProps) => {
  return (
    <InputLayout>
      {isRequired ? (
        <InputLabel htmlFor="input-box">
          {label}
          <Required>*</Required>
        </InputLabel>
      ) : (
        <RequiredLabel htmlFor="input-box">{label}</RequiredLabel>
      )}
      <InputContainer>
        <InputBox
          type="text"
          placeholder={placeholder}
          id="input-box"
          redError={redErrorIcon === 'error'}></InputBox>
        {checkIcon !== 'none' && (
          <InnerIcon
            src={INPUT_CHECK_ICONS[checkIcon]}
            alt=""></InnerIcon>
        )}
      </InputContainer>
      {redErrorIcon !== 'none' && (
        <ErrorMessage>
          <StyledImage
            src={INPUT_REDERROR_MESSAGE[redErrorIcon]}
            alt=""
          />
          {errorMessage}
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
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
`;

const InputLabel = styled.label`
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

const InputContainer = styled.div`
  position: relative;
`;

const InputBox = styled.input<{ redError: boolean }>`
  display: flex;
  width: 343px;
  height: 48px;
  padding: 13px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grayColor3};
  ::placeholder {
    color: ${({ theme }) => theme.colors.grayColor3};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.grayColor9};
  }
  ${({ redError }) =>
    redError &&
    css`
      border: 1px solid red; /* redError가 true일 때 border 색상을 빨간색으로 변경 */
    `}
`;

const InnerIcon = styled.img`
  position: absolute;
  color: ${({ theme }) => theme.colors.grayColor4};
  right: 17px;
  bottom: 14px;
  text-align: right;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  display: flex;
  color: ${({ theme }) => theme.colors.redColor0};
  font-size: 10px;
  font-style: normal;
  line-height: 15px; /* 150% */
`;

const StyledImage = styled.img`
  margin: 0 5px;
`;

export default FormField;
