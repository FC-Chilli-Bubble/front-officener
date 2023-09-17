import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { USER_NAME_REGEX, PHONE_NUMBER_REGEX, VERIFICATION_CODE_REGEX } from '@/constants/regexp';

import Header from '@/components/Common/Header';
import FormField from '@/components/Common/FormField';
import { error } from 'console';

interface ISignupStep3Props {
  // eslint-disable-next-line no-unused-vars
  setStepNum: (stepNum: number) => void;
}

type TErrorRedIconType = 'wrong' | 'error' | 'none';

// type TOnChangeType = 'string' | 'number';

const SignupStep6 = ({ setStepNum }: ISignupStep3Props) => {
  // 유효성 검사
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [verifyCode, setVerifyCode] = useState(0);
  const [isValid, setIsValid] = useState<boolean>(false);
  // 오류 메시지 상태
  const [nameMsg, setNameMsg] = useState('');
  const [verifyNumMsg, setVerifyNumMsg] = useState('');
  const [nameErrorIcon, setNameErrorIcon] = useState<TErrorRedIconType>('none');
  const [verifyNumErrorIcon, setVerifyNumErrorIcon] = useState<TErrorRedIconType>('none');
  const handleServiceClick = () => {
    setStepNum(5);
    console.log('이전 페이지로');
    return;
  };

  // 이름 입력 유효성 검사
  const handleNameChange = (newName: number | string) => {
    setName(newName.toString());
    if (!USER_NAME_REGEX.test(newName.toString())) {
      console.log('이름을 다시 확인해주세요.');
      return;
    } else {
      error('이름을 다시 확인해주세요.');
    }
  };
  // 전화번호 입력 유효성 검사
  const handlePhoneNumberChange = (newPhoneNum: number | string) => {
    setPhoneNumber(Number(newPhoneNum));
    if (!newPhoneNum) {
      setVerifyNumErrorIcon('error');
      setVerifyNumMsg('전화번호를 입력해 주세요');
      return;
    } else if (!PHONE_NUMBER_REGEX.test(newPhoneNum.toString())) {
      setVerifyNumErrorIcon('error');
      setVerifyNumMsg('유효하지 않은 번호입니당');
      return;
    } else {
      setVerifyNumMsg('');
      setVerifyNumErrorIcon('none');
    }
  };
  // 인증번호 입력 유효성 검사
  const handleVerifyCodeChange = (newCode: number | string) => {
    setPhoneNumber(Number(newCode));
    if (!newCode) {
      setVerifyNumErrorIcon('error');
      setVerifyNumMsg('비밀번호를 입력해 주세요');
      return;
    } else if (!VERIFICATION_CODE_REGEX.test(newCode.toString())) {
      setVerifyNumErrorIcon('error');
      setVerifyNumMsg('8~16자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를 입력해주세요');
      return;
    } else {
      setVerifyNumMsg('');
      setVerifyNumErrorIcon('none');
    }
  };

  // 이름과 전화번호 업데이트 감지
  useEffect(() => {
    updateLoginButtonState(name, phoneNumber, verifyCode);
  }, [name, phoneNumber, verifyCode]);

  const updateLoginButtonState = (newName: string, newPhoneNum: number, verifyCode: number) => {
    if (newName && newPhoneNum && verifyCode && !nameMsg && !verifyNumMsg) {
      setIsValid(true);
      console.log('유효성 검사 통과');
      return;
    } else {
      setIsValid(false);
      console.log('유효성 검사 실패');
    }
  };

  // 인증 로직
  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValid) {
      // 유효성 검사가 통과되면 휴대폰 번호 인증 로직 수행
      try {
        // 1. 서버로 이름과 전화번호를 전송(API Axios호출)
        // 2. 성공 메시지를 표시하거나 다음 페이지로 이동
      } catch (error) {
        console.error('로그인 실패:', error);
        setNameErrorIcon('wrong');
        setNameMsg('이메일 또는 비밀번호가 틀렸습니다.');
        setVerifyNumErrorIcon('error');
        setVerifyNumMsg('이메일 또는 비밀번호가 틀렸습니다.');
      }
      return;
    }
  };

  return (
    <>
      <Header
        title="회원가입"
        leftIcon="back"
        leftIconClick={handleServiceClick}
      />
      <StyledLayout>
        <StyledContainer onSubmit={handleLoginSubmit}>
          <StyledInput>
            <FormField
              isType="text"
              label="이름"
              value={name}
              placeholder="실명을 입력해 주세요."
              onChange={handleNameChange}
              errorMessage={nameMsg}
              redErrorIcon={nameErrorIcon}
            />
          </StyledInput>
          <StyledInput>
            <StyledBox>
              <FormField
                isType="number"
                label="휴대폰 번호"
                value={phoneNumber}
                placeholder="‘_’없이 숫자만 입력해 주세요."
                onChange={handlePhoneNumberChange}
                errorMessage=""
                redErrorIcon={'none'}
              />
              <StyledButton type="button">인증요청</StyledButton>
            </StyledBox>
            <FormField
              isType="number"
              label=""
              value={verifyCode}
              placeholder="6자리 인증번호를 입력해 주세요."
              onChange={handleVerifyCodeChange}
              errorMessage={verifyNumMsg}
              redErrorIcon={verifyNumErrorIcon}
            />
          </StyledInput>
        </StyledContainer>
      </StyledLayout>
    </>
  );
};
const StyledLayout = styled.div`
  height: calc(100% - 60px - 56px);
  padding: 0 17px;
  /* display: flex; */
  /* background-color: green; */
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 267px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledInput = styled.div`
  margin-top: 23px;
`;

const StyledBox = styled.div`
  display: flex;
  align-items: end;
`;
const StyledButton = styled.button`
  width: 78px;
  height: 48px;
  margin-left: 8px;
  /* padding: 0 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.grayColor1 : theme.colors.ctaColor};
  color: ${({ disabled, theme }) => (disabled ? theme.colors.grayColor4 : theme.colors.white)};
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:active {
    background-color: ${({ theme }) => theme.colors.ctaPressedColor};
  }
`;

export default SignupStep6;
