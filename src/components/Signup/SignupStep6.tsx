import { useState, useEffect, useCallback } from 'react';
import { styled } from 'styled-components';
import { USER_NAME_REGEX, PHONE_NUMBER_REGEX, VERIFICATION_CODE_REGEX } from '@/constants/regexp';
import 'react-toastify/dist/ReactToastify.css';
// import { useRecoilValue } from 'recoil';
// import {
//   agreementCheckboxAtom,
//   userResidentAtom,
//   SignupAccountAtom,
//   verificationResultState
// } from '@/states/signupRequestAtom';
import { toast, ToastContainer } from 'react-toastify';

import Header from '@/components/Common/Header';
import FormField from '@/components/Common/FormField';
import Button from '@/components/Common/Button';
import { IErrorResponse } from '@/types/Common/IErrorResponse';
import { createhAuthCode } from '@/apis/Signup/AuthCodeRequests';
import { createCodeConfirm } from '@/apis/Signup/CodeConfirmRequests';

interface SignupStepProps {
  // eslint-disable-next-line no-unused-vars
  onNextStep: (stepNum: number) => void;
}

type TErrorIconType = 'wrong' | 'error' | 'correct' | 'errorG' | 'none';

const SignupStep6 = ({ onNextStep }: SignupStepProps) => {
  // 유효성 검사
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  // 오류 메시지 상태
  const [verifyCodeMsg, setVerifyCodeMsg] = useState('');
  const [verifyCodeErrorIcon, setVerifyCodeErrorIcon] = useState<TErrorIconType>('none');
  // 인증요청 버튼 상태
  const [isValid, setIsValid] = useState(false);
  // 인증요청 버튼 텍스트 상태
  const [isVerificationComplete, setVerificationComplete] = useState(false);
  // 페이지 이동 버튼 상태
  const [disabled, setDisabled] = useState(false);
  // 서버로부터 받은 인증코드
  const [receivedVerifyCode, setReceivedVerifyCode] = useState('');
  // 리코일에서 받아온 상태값
  // const agreementCheckboxAtom = useRecoilValue(agreementCheckboxAtom);
  // const userBuildingsAtom = useRecoilValue(userBuildingsAtom);
  // const SignupAccountAtom = useRecoilValue(SignupAccountAtom);
  // const verificationResultState = useRecoilValue(verificationResultState);

  const handleServiceClick = () => {
    onNextStep(6);
    return;
  };
  const handleNextStep = () => {
    onNextStep(8);
    return;
  };

  // 이름 입력 유효성 검사
  const handleNameChange = (newName: string) => {
    setName(newName);
    if (!USER_NAME_REGEX.test(newName)) {
      return;
    } else return;
  };

  // 전화번호 입력 유효성 검사
  const handlePhoneNumberChange = (newPhoneNum: string) => {
    setPhoneNumber(newPhoneNum);
    if (!PHONE_NUMBER_REGEX.test(newPhoneNum)) {
      return;
    } else {
      setVerifyCodeMsg('');
      setVerifyCodeErrorIcon('none');
    }
  };

  // 인증번호 입력 유효성 검사
  const handleVerifyCodeChange = (newCode: string) => {
    setVerifyCode(newCode);
    if (!newCode) {
      setVerifyCodeErrorIcon('error');
      setVerifyCodeMsg('인증번호를 입력해 주세요');
      return;
    } else if (!VERIFICATION_CODE_REGEX.test(newCode)) {
      setVerifyCodeErrorIcon('wrong');
      setVerifyCodeMsg('인증번호가 일치하지 않습니다.');
      return;
    } else {
      setVerifyCodeMsg('');
      setVerifyCodeErrorIcon('none');
      handleVerifyCodeReq(newCode);
    }
  };

  // 이름과 전화번호 업데이트 감지
  useEffect(() => {
    requsetButtonState(name, phoneNumber);
  }, [name, phoneNumber, verifyCode]);

  const requsetButtonState = (newName: string, newPhoneNum: string) => {
    if (USER_NAME_REGEX.test(newName) && PHONE_NUMBER_REGEX.test(newPhoneNum)) {
      setIsValid(true); //인증 요청 활성화
      return;
    } else {
      setIsValid(false);
    }
  };

  // 인증번호 요청
  const handleCodeReq = (e: React.FormEvent) => {
    e.preventDefault();
    createhAuthCode(name, phoneNumber).then(
      response => {
        const responseData = response.data;
        const receivedVerifyCode = responseData.verifyCode;
        console.log('API 요청 성공! 인증 코드:', receivedVerifyCode);
        setReceivedVerifyCode(receivedVerifyCode);
        setVerifyCodeErrorIcon('errorG');
        setVerifyCodeMsg('해당 번호로 인증 번호를 발송했습니다.');
        notify();
      },
      (error: IErrorResponse) => {
        setIsValid(false);
        setVerifyCodeErrorIcon('wrong');
        setVerifyCodeMsg('이미 등록된 휴대폰 번호입니다.');
        console.log(error.errorMessage);
        return;
      }
    );
  };
  // 인증번호 토스트
  const notify = () => toast(`인증번호 : ${receivedVerifyCode}`);

  // 인증 번호 확인
  const handleVerifyCodeReq = useCallback(
    (verifyCode: string) => {
      // e.preventDefault();
      if (receivedVerifyCode && name && phoneNumber) {
        createCodeConfirm(phoneNumber, verifyCode).then(
          response => {
            const responseData = response.data;
            console.log(responseData);
            setVerifyCodeErrorIcon('correct');
            setVerifyCodeMsg('인증이 완료되었습니다.');
            setVerificationComplete(true);
            setDisabled(true);
          },
          (error: IErrorResponse) => {
            setVerifyCodeErrorIcon('wrong');
            setVerifyCodeMsg('인증번호가 맞지 않습니다.');
            setVerificationComplete(false);
            console.log(error.errorMessage);
            // 400에러일때 조건 추가
            return;
          }
        );
        return;
      } else return;
    },
    [receivedVerifyCode, name, phoneNumber, verifyCode]
  );

  // 회원가입 요청
  const handleSignupReq = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
    [receivedVerifyCode, name, phoneNumber, verifyCode]
  );

  return (
    <>
      <Header
        title="회원가입"
        leftIcon="back"
        leftIconClick={handleServiceClick}
      />
      <StyledLayout>
        <StyledContainer onSubmit={handleSignupReq}>
          <StyledInput>
            <FormField
              isType="text"
              label="이름"
              value={name}
              name="userName"
              //name props 다 고유하게 그 input에 대한 name으로 변경했어여
              placeholder="실명을 입력해 주세요."
              onChange={handleNameChange}
              errorMessage=""
              redErrorIcon="none"
            />
          </StyledInput>
          <StyledInput>
            <StyledBox>
              <FormField
                isType="text"
                label="휴대폰 번호"
                name="phoneNum"
                value={phoneNumber}
                placeholder="‘_’없이 숫자만 입력해 주세요."
                maxLength={11}
                onChange={value => handlePhoneNumberChange(value.replace(/[^0-9]/g, ''))}
                errorMessage=""
                redErrorIcon={'none'}
              />
              <StyledButton
                type="button"
                onClick={handleCodeReq}
                disabled={!isValid}>
                {isVerificationComplete ? '인증완료' : '인증요청'}
              </StyledButton>
              <ToastContainer
                position="top-right"
                limit={1}
                closeButton={false}
                autoClose={3000}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                hideProgressBar
              />
            </StyledBox>
            <FormField
              isType={'text'}
              label=""
              name="verifyCode"
              value={verifyCode}
              placeholder="6자리 인증번호를 입력해 주세요."
              onChange={handleVerifyCodeChange}
              errorMessage={verifyCodeMsg}
              redErrorIcon={verifyCodeErrorIcon}
            />
          </StyledInput>
        </StyledContainer>
        <StyledButtonContainer>
          <Button
            size="normal"
            type="cta"
            title="다음"
            width="100%"
            disabled={!disabled}
            onClick={handleNextStep}
          />
        </StyledButtonContainer>
      </StyledLayout>
    </>
  );
};
const StyledLayout = styled.div`
  height: calc(100% - 56px);
  padding: 0 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledContainer = styled.form`
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
  width: 94px;
  height: 48px;
  margin-left: 8px;
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

const StyledButtonContainer = styled.div`
  margin: 30px 0;
`;

export default SignupStep6;
