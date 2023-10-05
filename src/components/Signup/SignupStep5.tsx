import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants/regexp';
import { useSetRecoilState } from 'recoil';

import Header from '@/components/Common/Header';
import FormField from '@/components/Common/FormField';
import Button from '@/components/Common/Button';
import { signupAccountAtom } from '@/states/signupRequestAtom';

interface SignupStepProps {
  // eslint-disable-next-line no-unused-vars
  onNextStep: (stepNum: number) => void;
}

type TErrorIconType = 'wrong' | 'error' | 'errorG' | 'correct' | 'none';

const SignupStep5 = ({ onNextStep }: SignupStepProps) => {
  // 유효성 검사
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [isValid, setIsValid] = useState(false);
  // 오류 메시지 상태
  const [emailMsg, setEmailMsg] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [emailErrorIcon, setEmailErrorIcon] = useState<TErrorIconType>('none');
  const [pwsErrorIcon, setPwsErrorIcon] = useState<TErrorIconType>('none');

  //계정 정보 저장하기
  const setUserAccount = useSetRecoilState(signupAccountAtom);
  const handleUserAccount = (value: string, key: string) => {
    setUserAccount(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleServiceClick = () => {
    onNextStep(5);
    return;
  };

  const handleNextStep = () => {
    handleUserAccount(email, 'email');
    handleUserAccount(password, 'password');
    onNextStep(7);
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
      setEmailErrorIcon('none');
      setEmailMsg('');
      return;
    } else {
      setEmailErrorIcon('none');
      setEmailMsg('pass');
      handleIsValid();
    }
  };

  // 이메일 입력 유효성 검사 (포커스아웃 시에 에러메시지 반응)
  const handleEmailBlur = (newEmail: string) => {
    setEmail(newEmail);
    if (!newEmail) {
      setEmailErrorIcon('error');
      setEmailMsg('이메일을 입력해 주세요');
      setIsValid(false);
      return;
    } else if (!EMAIL_REGEX.test(newEmail)) {
      setEmailErrorIcon('error');
      setEmailMsg('정확한 이메일 형식을 입력해 주세요.');
      setIsValid(false);
      return;
    } else {
      setEmailErrorIcon('none');
      setEmailMsg('pass');
      handleIsValid();
    }
  };

  // 비밀번호 입력 유효성 검사
  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
    if (!newPassword) {
      setPwsErrorIcon('none');
      setPwdMsg('');
      setIsValid(false);
      return;
    } else if (!PASSWORD_REGEX.test(newPassword)) {
      setPwsErrorIcon('none');
      setPwdMsg('');
      setIsValid(false);
      return;
    } else if (newPassword === passwordVerify) {
      setPwsErrorIcon('correct');
      setPwdMsg('비밀번호가 일치합니다.');
      return;
    } else {
      setPwsErrorIcon('none');
      setPwdMsg('');
    }
  };

  // 비밀번호 입력 유효성 검사 (포커스아웃 시에 에러메시지 반응)
  const handlePasswordBlur = (newPassword: string) => {
    setPassword(newPassword);
    if (!newPassword) {
      setPwsErrorIcon('error');
      setPwdMsg('비밀번호를 입력해 주세요');
      return;
    } else if (!PASSWORD_REGEX.test(newPassword)) {
      setPwsErrorIcon('error');
      setPwdMsg('8~16자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를 입력해주세요');
      return;
    } else if (newPassword === passwordVerify) {
      setPwsErrorIcon('correct');
      setPwdMsg('비밀번호가 일치합니다.');
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
      setPwsErrorIcon('none');
      setPwdMsg('');
      return;
    } else if (password !== newPassword) {
      setPwsErrorIcon('none');
      setPwdMsg('');
      return;
    } else if (!PASSWORD_REGEX.test(newPassword)) {
      setPwsErrorIcon('none');
      setPwdMsg('');
      return;
    } else {
      setPwsErrorIcon('correct');
      setPwdMsg('비밀번호가 일치합니다.');
      handleIsValid();
      return;
    }
  };

  // 비밀번호 재확인 (포커스아웃 시에 에러메시지 반응)
  const handlePasswordVerifyBlur = (newPassword: string) => {
    setPasswordVerify(newPassword.toString());
    if (!newPassword) {
      setPwsErrorIcon('error');
      setPwdMsg('비밀번호를 다시 입력해 주세요');
      return;
    } else if (password !== newPassword) {
      setPwsErrorIcon('error');
      setPwdMsg('비밀번호가 일치하지 않습니다.');
      return;
    } else if (!PASSWORD_REGEX.test(newPassword)) {
      setPwsErrorIcon('error');
      setPwdMsg('8~16자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를 입력해주세요');
      return;
    } else {
      setPwsErrorIcon('correct');
      setPwdMsg('비밀번호가 일치합니다.');
      handleIsValid();
      return;
    }
  };

  const handleIsValid = () => {
    if (emailMsg === 'pass' && pwsErrorIcon === 'correct') {
      setIsValid(true);
      return;
    } else {
      setIsValid(false);
    }
  };

  // passwordVerify 상태 변경 시 handleIsValid 호출
  useEffect(() => {
    handleIsValid();
  }, [email, passwordVerify, password, emailMsg, pwdMsg]);

  // 계정 생성(저장))
  const handleAccountSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      handleUserAccount(email, 'email');
      handleUserAccount(password, 'password');
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
      <StyledLayout onSubmit={handleAccountSubmit}>
        <StyleContainer>
          <StyledInput>
            <FormField
              isType="email"
              label="아이디"
              name="email"
              value={email}
              placeholder="이메일을 입력해 주세요."
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
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
              onBlur={handlePasswordBlur}
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
              onBlur={handlePasswordVerifyBlur}
              errorMessage={pwdMsg}
              redErrorIcon={pwsErrorIcon}
            />
          </StyledInput>
        </StyleContainer>
        <StyledButtonContainer>
          <Button
            size="normal"
            type="cta"
            title="다음"
            width="100%"
            disabled={!isValid}
            onClick={handleNextStep}
          />
        </StyledButtonContainer>
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

const StyledButtonContainer = styled.div`
  margin: 30px 0;
`;

export default SignupStep5;
