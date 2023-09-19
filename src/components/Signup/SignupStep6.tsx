import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { USER_NAME_REGEX, PHONE_NUMBER_REGEX, VERIFICATION_CODE_REGEX } from '@/constants/regexp';

import Header from '@/components/Common/Header';
import FormField from '@/components/Common/FormField';
import Button from '@/components/Common/Button';

interface SignupStepProps {
  // eslint-disable-next-line no-unused-vars
  onNextStep: (stepNum: number) => void;
}

type TErrorRedIconType = 'wrong' | 'error' | 'correct' | 'none';

const SignupStep6 = ({ onNextStep }: SignupStepProps) => {
  // 유효성 검사
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [verifyCode, setVerifyCode] = useState(0);
  // 오류 메시지 상태
  const [verifyNumMsg, setVerifyNumMsg] = useState('');
  const [verifyNumErrorIcon, setVerifyNumErrorIcon] = useState<TErrorRedIconType>('none');
  // 인증요청 버튼 상태
  const [isValid, setIsValid] = useState(false);
  // 인증요청 버튼 텍스트 상태
  const [isVerificationComplete, setVerificationComplete] = useState(false);
  // 버튼 상태
  const [disabled, setDisabled] = useState(false); //임시로 false

  const handleServiceClick = () => {
    onNextStep(5);
    console.log('이전 페이지로');
    return;
  };
  const handleNextStep = () => {
    onNextStep(7);
    console.log('이전 페이지로');
    return;
  };

  // 이름 입력 유효성 검사
  const handleNameChange = (newName: number | string) => {
    setName(newName.toString());
    if (!USER_NAME_REGEX.test(newName.toString())) {
      console.log('이름 양식 확인');
      return;
    } else {
      console.log('이름 양식 확인');
    }
  };

  // 전화번호 입력 유효성 검사
  const handlePhoneNumberChange = (newPhoneNum: number | string) => {
    setPhoneNumber(Number(newPhoneNum));
    if (!PHONE_NUMBER_REGEX.test(newPhoneNum.toString())) {
      console.log('전화번호 양식 확인');
      return;
    } else {
      setVerifyNumMsg('');
      setVerifyNumErrorIcon('none');
    }
  };

  // 인증번호 입력 유효성 검사
  const handleVerifyCodeChange = (newCode: number | string) => {
    setVerifyCode(Number(newCode));
    if (!newCode) {
      setVerifyNumErrorIcon('error');
      setVerifyNumMsg('인증번호를 입력해 주세요');
      return;
    } else if (!VERIFICATION_CODE_REGEX.test(newCode.toString())) {
      setVerifyNumErrorIcon('wrong');
      setVerifyNumMsg('인증번호가 일치하지 않습니다.');
      return;
    } else {
      setVerifyNumMsg('');
      setVerifyNumErrorIcon('none');
    }
  };

  // 이름과 전화번호 업데이트 감지
  useEffect(() => {
    requsetButtonState(name, phoneNumber);
  }, [name, phoneNumber, verifyCode]);

  const requsetButtonState = (newName: string, newPhoneNum: number) => {
    if (newName && newPhoneNum) {
      setIsValid(true);
      //인증 요청 활성화
      console.log('유효성 검사 통과');
      return;
    } else {
      setIsValid(false);
      console.log('유효성 검사 실패');
    }
  };

  // 인증번호 요청 함수
  const sendApiRequest = async () => {
    try {
      setIsValid(true);
      // API 요청 보내기
      // const response = await axios.post(apiUrl, requestData);
      // 응답 데이터에서 인증 코드 추출
      // const responseData = response.data;
      // const receivedVerifyCode = responseData.data.verifyCode;
      const receivedVerifyCode = 123456;
      // 인증 코드를 상태에 저장
      setVerifyCode(receivedVerifyCode);
      console.log('API 요청 성공! 인증 코드:', receivedVerifyCode);
      setVerifyNumErrorIcon('error');
      setVerifyNumMsg('해당 번호로 인증 번호를 발송했습니다.');
    } catch {
      setIsValid(false);
      setVerifyNumErrorIcon('wrong');
      setVerifyNumMsg('이미 등록된 휴대폰 번호입니다.');
      // 다음으로 넘어가는 버튼 비활성화
    }
  };

  // 인증 번호 확인 함수
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name && phoneNumber && verifyCode === receivedVerifyCode) {
      try {
        // 1. 서버로 이름과 전화번호를 전송(API Axios호출)
        // 2. 성공 메시지를 표시하거나 다음 페이지로 이동
        setVerifyNumErrorIcon('correct');
        setVerifyNumMsg('인증이 완료되었습니다.');
        setVerificationComplete(true);
      } catch (error) {
        // console.error('로그인 실패:', error);
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
        <StyledContainer onSubmit={handleSubmit}>
          <StyledInput>
            <FormField
              isType="text"
              label="이름"
              value={name}
              name=""
              placeholder="실명을 입력해 주세요."
              onChange={handleNameChange}
              errorMessage={''}
              redErrorIcon={'none'}
            />
          </StyledInput>
          <StyledInput>
            <StyledBox>
              <FormField
                isType="number"
                label="휴대폰 번호"
                name=""
                value={phoneNumber === 0 ? '' : phoneNumber}
                placeholder="‘_’없이 숫자만 입력해 주세요."
                onChange={handlePhoneNumberChange}
                errorMessage=""
                redErrorIcon={'none'}
              />
              <StyledButton
                type="button"
                onClick={sendApiRequest}
                disabled={!isValid}>
                {isVerificationComplete ? '인증완료' : '인증요청'}
              </StyledButton>
            </StyledBox>
            <FormField
              isType={'number'}
              label=""
              name={''}
              value={verifyCode === 0 ? '' : verifyCode}
              placeholder="6자리 인증번호를 입력해 주세요."
              onChange={handleVerifyCodeChange}
              errorMessage={verifyNumMsg}
              redErrorIcon={verifyNumErrorIcon}
            />
          </StyledInput>
        </StyledContainer>
        <Button
          size={'normal'}
          type={'cta'}
          title={'다음'}
          width={'100%'}
          disabled={disabled}
          onClick={handleNextStep}
        />
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
  width: 88px;
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

export default SignupStep6;
