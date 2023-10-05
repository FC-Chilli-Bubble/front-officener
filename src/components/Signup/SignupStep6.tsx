import { useState, useEffect, useCallback } from 'react';
import { styled } from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useModal } from '@/hooks/useModal';
import Header from '@/components/Common/Header';
import FormField from '@/components/Common/FormField';
import Button from '@/components/Common/Button';
import MODAL_DATAS from '@/constants/modalDatas';
import { IErrorResponse } from '@/types/Common/IErrorResponse';
import { createhAuthCode } from '@/apis/Signup/AuthCodeRequests';
import { createCodeConfirm } from '@/apis/Signup/CodeConfirmRequests';
import { createSignup } from '@/apis/Signup/SignupRequests';
import { USER_NAME_REGEX, PHONE_NUMBER_REGEX, VERIFICATION_CODE_REGEX } from '@/constants/regexp';
import {
  agreementCheckboxAtom,
  signupAccountAtom,
  userDataAtom,
  userBuildingsAtom,
  userOfficeAtom
} from '@/states/signupRequestAtom';

interface SignupStepProps {
  // eslint-disable-next-line no-unused-vars
  onNextStep: (stepNum: number) => void;
}

type TErrorIconType = 'wrong' | 'error' | 'correct' | 'errorG' | 'none';

const SignupStep6 = ({ onNextStep }: SignupStepProps) => {
  const { openModal } = useModal();
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
  // 인증 용청 확인 후 인풋창 수정 불가설정
  const [isEditDisabled, setIsEditDisabled] = useState(false);
  // 리코일에서 받아온 상태값
  const agreementCheckbox = useRecoilValue(agreementCheckboxAtom);
  const userAccount = useRecoilValue(signupAccountAtom);
  const userBuilding = useRecoilValue(userBuildingsAtom);
  const userOffice = useRecoilValue(userOfficeAtom);
  // 리코일에 상태 저장
  const setUserInfo = useSetRecoilState(userDataAtom);

  const handleServiceClick = () => {
    onNextStep(6);
    return;
  };

  const handleNextStep = () => {
    //페이지 이동 시 상태값 저장
    setUserInfo({ name, phoneNumber });
    onNextStep(8);
    return;
  };

  // 이름 입력 유효성 검사
  const handleNameChange = (newName: string) => {
    setName(newName);
    return;
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
      setVerifyCodeMsg('6자리 인증번호를 입력해주세요.');
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
      setIsValid(true);
      return;
    } else {
      setIsValid(false);
    }
  };

  // 인증번호 요청
  const handleReceivedCodeReq = (e: React.FormEvent) => {
    e.preventDefault();
    createhAuthCode(name, phoneNumber).then(
      response => {
        const verifyCode = response.data.verifyCode;
        setReceivedVerifyCode(verifyCode);
        setVerifyCodeErrorIcon('errorG');
        setVerifyCodeMsg('해당 번호로 인증 번호를 발송했습니다.');
        notify(verifyCode);
      },
      (error: IErrorResponse) => {
        const errorData = error.errorMessage;
        setIsValid(false);
        setVerifyCodeErrorIcon('wrong');
        setVerifyCodeMsg(errorData);
        return;
      }
    );
  };
  // 인증번호 토스트
  const notify = (verifyCode: string) => toast(`✅ 휴대폰 인증번호 : ${verifyCode}`);
  // 인증번호 확인 요청
  const handleVerifyCodeReq = useCallback(
    (verifyCode: string) => {
      if (receivedVerifyCode !== '' && name && phoneNumber) {
        createCodeConfirm(phoneNumber, verifyCode).then(
          response => {
            const message = response.data;
            setVerifyCodeErrorIcon('correct');
            setVerifyCodeMsg(message);
            setVerificationComplete(true);
            setDisabled(true);
            setIsEditDisabled(true);
          },
          (error: IErrorResponse) => {
            const errorData = error.errorMessage;
            setVerifyCodeErrorIcon('wrong');
            setVerifyCodeMsg(errorData);
            setVerificationComplete(false);
            setVerifyCode('');
            return;
          }
        );
      } else return;
    },
    [receivedVerifyCode, name, phoneNumber]
  );

  // 회원가입 요청
  const handleSignupReq = (e?: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault();
    createSignup({
      agree: agreementCheckbox.agree,
      buildingName: userBuilding.buildingName,
      officeName: userOffice.officeName,
      email: userAccount.email,
      password: userAccount.password,
      name,
      phoneNumber
    }).then(
      () => {
        handleNextStep();
      },
      () => {
        openModal({
          ...MODAL_DATAS.SIGNUP_FAIL_ALERT,
          positiveCallback: () => { }
        });
        return;
      }
    );
  };

  return (
    <>
      <Header
        title="회원가입"
        leftIcon="back"
        leftIconClick={handleServiceClick}
      />
      <StyledLayout>
        <StyledContainer>
          <StyledInput>
            <FormField
              isType="text"
              label="이름"
              name="name"
              value={name}
              placeholder="실명을 입력해 주세요."
              onChange={handleNameChange}
              errorMessage=""
              redErrorIcon="none"
              disabled={isEditDisabled}
            />
          </StyledInput>
          <StyledInput>
            <StyledBox>
              <FormField
                isType="text"
                label="휴대폰 번호"
                name="phoneNumber"
                value={phoneNumber}
                placeholder="‘_’없이 숫자만 입력해 주세요."
                maxLength={11}
                onChange={value => handlePhoneNumberChange(value.replace(/[^0-9]/g, ''))}
                errorMessage=""
                redErrorIcon={'none'}
                disabled={isEditDisabled}
              />
              <StyledButton
                type="button"
                onClick={handleReceivedCodeReq}
                disabled={!isValid}>
                {isVerificationComplete ? '인증완료' : '인증요청'}
              </StyledButton>
              <StyledToastContainer
                position="top-right"
                limit={1}
                closeButton={false}
                autoClose={4000}
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
              disabled={isEditDisabled}
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
            onClick={handleSignupReq}
          />
        </StyledButtonContainer>
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.form`
  height: calc(100% - 56px);
  padding: 0 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  &:last-child {
    height: 100%;
  }
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

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 16px;
    border-radius: 10px;
    padding: 16px 28px;
    color: ${({ theme }) => theme.colors.grayColor5};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const StyledButtonContainer = styled.div`
  margin: 30px 0;
`;

export default SignupStep6;
