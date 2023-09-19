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
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (stepNum === 2) {
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

  // stepNum에 따라 현재 스텝의 컴포넌트를 선택합니다.
  if (stepNum === 1) {
    currentStepComponent = <SignupStep1 onNextStep={handleNextStep} />;
    // buttonText = '다음';
  } else if (stepNum === 2) {
    currentStepComponent = <SignupStep2 setStepNum={setStepNum} />;
    // buttonText = '다음';
  } else if (stepNum === 3) {
    currentStepComponent = <SignupStep3 setStepNum={setStepNum} />;
    // buttonText = '선택완료';
  } else if (stepNum === 4) {
    currentStepComponent = <SignupStep4 setStepNum={setStepNum} />;
    // buttonText = '네, 확인했어요!';
  } else if (stepNum === 5) {
    currentStepComponent = <SignupStep5 setStepNum={setStepNum} />;
    // buttonText = '다음';
  } else if (stepNum === 6) {
    currentStepComponent = <SignupStep6 setStepNum={setStepNum} />;
    // buttonText = '다음';
  } else {
    currentStepComponent = <SignupStep7 setStepNum={setStepNum} />;
    // buttonText = '닫기!';
  }

  return (
    <>
      <SytledLayout>
        <SytledContainer>{currentStepComponent}</SytledContainer>
      </SytledLayout>
    </>
  );
};

const SytledLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SytledContainer = styled.div`
  height: 100%;
`;

export default Signup;
