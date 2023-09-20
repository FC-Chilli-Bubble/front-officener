import { useState, useEffect, useCallback } from 'react';
import { styled } from 'styled-components';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants/regexp';

import Header from '@/components/Common/Header';
import FormField from '@/components/Common/FormField';

import Button from '@/components/Common/Button';

interface SignupStepProps {
  // eslint-disable-next-line no-unused-vars
  onNextStep: (stepNum: number) => void;
}

type ErrorRedIconType = 'wrong' | 'error' | 'correct' | 'none';

const SignupStep5 = ({ onNextStep }: SignupStepProps) => {
  // 유효성 검사
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [isValid, setIsValid] = useState<boolean>(false);
  // 오류 메시지 상태
  const [emailMsg, setEmailMsg] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [emailErrorIcon, setEmailErrorIcon] = useState<ErrorRedIconType>('none');
  const [pwsErrorIcon, setPwsErrorIcon] = useState<ErrorRedIconType>('none');
  // 버튼 상태
  const [disabled, setDisabled] = useState(true);

  const handleServiceClick = () => {
    onNextStep(4);
    console.log('이전 페이지로');
    return;
  };
  const handleNextStep = () => {
    onNextStep(6);
    console.log('이전 페이지로');
    return;
  };

  // 이메일 입력 유효성 검사
  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
    if (!newEmail) {
      setEmailErrorIcon('error');
      setEmailMsg('이메일을 입력해 주세요');
      return;
    } else if (!EMAIL_REGEX.test(newEmail)) {
      setEmailErrorIcon('error');
      setEmailMsg('정확한 이메일 형식을 입력해 주세요.');
      return;
    } else {
      setEmailMsg('');
      setEmailErrorIcon('none');
    }
  };

  // 비밀번호 입력 유효성 검사
  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
    if (!newPassword) {
      setPwsErrorIcon('error');
      setPwdMsg('비밀번호를 입력해 주세요');
      return;
    } else if (!PASSWORD_REGEX.test(newPassword)) {
      setPwsErrorIcon('error');
      setPwdMsg('8~16자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를 입력해주세요');
      return;
    } else {
      setPwdMsg('');
      setPwsErrorIcon('none');
    }
  };
  // 비밀번호 재확인
  const handlePasswordVerify = (newPassword: string) => {
    setPasswordVerify(newPassword.toString());
    if (!newPassword) {
      setPwsErrorIcon('error');
      setPwdMsg('비밀번호를 다시 입력해 주세요');
      return;
    } else if (password !== newPassword) {
      setPwsErrorIcon('error');
      setPwdMsg('비밀번호가 일치하지 않습니다.');
      return;
    } else {
      setPwsErrorIcon('correct');
      setPwdMsg('비밀번호가 일치합니다.');
      setDisabled(false); // 임시 활성화
    }
  };

  const updateLoginButtonState = useCallback(
    (newEmail: string, newPassword: string) => {
      if (newEmail && newPassword && !emailMsg && pwdMsg == 'correct') {
        setIsValid(true);
        console.log('유효성 검사 통과');
        return;
      } else {
        setIsValid(false);
        console.log('유효성 검사 실패');
      }
    },
    [emailMsg, pwdMsg]
  );

  // 이메일과 비밀번호 업데이트 감지
  useEffect(() => {
    return () => updateLoginButtonState(email, password);
  }, [email, password, updateLoginButtonState]);

  // 회원가입 로직
  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValid) {
      // 유효성 검사가 통과되면 회원가입 로직 수행
      try {
        // 1. 서버로 이메일과 비밀번호를 전송(API Axios호출)
        // 2. 성공 메시지를 표시하거나 다음 페이지로 이동
      } catch (error) {
        console.error('로그인 실패:', error);
        setEmailErrorIcon('wrong');
        setEmailMsg('이메일 또는 비밀번호가 틀렸습니다.');
        setPwsErrorIcon('error');
        setPwdMsg('이메일 또는 비밀번호가 틀렸습니다.');
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
      <StyledLayout onSubmit={handleLoginSubmit}>
        <StyleContainer>
          <StyledInput>
            <FormField
              isType="email"
              label="아이디"
              name="email"
              value={email}
              placeholder="이메일을 입력해 주세요."
              onChange={handleEmailChange}
              errorMessage={emailMsg}
              redErrorIcon={emailErrorIcon}
            />
          </StyledInput>
          <StyledInput>
            <FormField
              isType="password"
              label="비밀번호"
              name="password"
              value={password}
              placeholder="영문,숫자,특수기호 포함 8~16자입니다."
              onChange={handlePasswordChange}
              errorMessage=""
              redErrorIcon="none"
            />
            <FormField
              isType="password"
              label=""
              name="passwordVerify"
              value={passwordVerify}
              placeholder="비밀번호를 다시 입력해 주세요."
              onChange={handlePasswordVerify}
              errorMessage={pwdMsg}
              redErrorIcon={pwsErrorIcon}
            />
          </StyledInput>
        </StyleContainer>
        <Button
          size="normal"
          type="cta"
          title="다음"
          width="100%"
          disabled={disabled}
          onClick={handleNextStep}
        />
      </StyledLayout>
    </>
  );
};
const StyledLayout = styled.form`
  height: calc(100% - 56px);
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyleContainer = styled.div`
  margin-top: 18px;
`;
const StyledInput = styled.div`
  position: relative;
  top: 0;
  height: 98px;
  margin-bottom: 23px;
`;

export default SignupStep5;
