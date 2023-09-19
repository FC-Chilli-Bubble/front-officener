import { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import SignupStep1 from '@/components/Signup/SignupStep1';
import SignupStep2 from '@/components/Signup/SignupStep2';
import SignupStep3 from '@/components/Signup/SignupStep3';
import SignupStep4 from '@/components/Signup/SignupStep4';
import SignupStep5 from '@/components/Signup/SignupStep5';
import SignupStep6 from '@/components/Signup/SignupStep6';
import SignupStep7 from '@/components/Signup/SignupStep7';

const Signup = () => {
  const [stepNum, setStepNum] = useState(1);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

  // SignupStep1 컴포넌트에서 호출할 함수
  const handleChildCheckChange = (isCheckedArray: boolean[]) => {
    // 마지막 체크박스 (마케팅 정보 수신)를 제외한 모든 체크박스가 체크되어야 버튼이 활성화됩니다.
    const isButtonDisabled = !isCheckedArray.slice(0, -1).every(isChecked => isChecked);
    setButtonDisabled(isButtonDisabled);
  };

  const handleNextStep = () => {
    if (stepNum === 1) {
      setStepNum(2);
    } else if (stepNum === 2) {
      setStepNum(4);
    } else if (stepNum === 3) {
      setStepNum(2);
    } else if (stepNum === 7) {
      navigate('/login');
      console.log('이동함');
    } else {
      setStepNum(stepNum + 1);
    }
  };

  let currentStepComponent;
  let buttonText;

  // stepNum에 따라 현재 스텝의 컴포넌트를 선택합니다.
  if (stepNum === 1) {
    currentStepComponent = <SignupStep1 onChildCheckChange={handleChildCheckChange} />;
    buttonText = '다음';
  } else if (stepNum === 2) {
    currentStepComponent = <SignupStep2 setStepNum={setStepNum} />;
    buttonText = '다음';
  } else if (stepNum === 3) {
    currentStepComponent = <SignupStep3 setStepNum={setStepNum} />;
    buttonText = '선택완료';
  } else if (stepNum === 4) {
    currentStepComponent = <SignupStep4 setStepNum={setStepNum} />;
    buttonText = '네, 확인했어요!';
  } else if (stepNum === 5) {
    currentStepComponent = <SignupStep5 setStepNum={setStepNum} />;
    buttonText = '다음';
  } else if (stepNum === 6) {
    currentStepComponent = <SignupStep6 setStepNum={setStepNum} />;
    buttonText = '다음';
  } else {
    currentStepComponent = <SignupStep7 setStepNum={setStepNum} />;
    buttonText = '닫기!';
  }

  return (
    <>
      <SytledLayout>
        <SytledContainer>{currentStepComponent}</SytledContainer>
        <StyledButton
          disabled={isButtonDisabled}
          onClick={handleNextStep}>
          {buttonText}
        </StyledButton>
      </SytledLayout>
    </>
  );
};

const SytledLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: blue; */
`;

const SytledContainer = styled.div`
  height: calc(100% - 60px - 56px); //버튼이랑 헤더 영역 빼기
`;

const StyledButton = styled.button`
  margin: auto 17px;
  height: 60px;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.ctaColor};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export default Signup;
