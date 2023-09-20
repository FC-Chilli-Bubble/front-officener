import { useState, useMemo, useEffect } from 'react';
import { styled } from 'styled-components';
// import { useNavigate } from 'react-router-dom';

import SignupStep1 from '@/components/Signup/SignupStep1';
import SignupStep2 from '@/components/Signup/SignupStep2';
import SignupStep3 from '@/components/Signup/SignupStep3';
import SignupStep4 from '@/components/Signup/SignupStep4';
import SignupStep5 from '@/components/Signup/SignupStep5';
import SignupStep6 from '@/components/Signup/SignupStep6';
import SignupStep7 from '@/components/Signup/SignupStep7';

// 함수 타입을 인터페이스로 정의
interface IStepHandler {
  // eslint-disable-next-line no-unused-vars
  (nextStepNum: number): void;
}

const Signup = () => {
  // const navigate = useNavigate();
  const [stepNum, setStepNum] = useState(1);
  // const [nextStepNum, setNextStepNum] = useState<number | null>(null); // 선택한 다음 스텝 번호

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNextStep: IStepHandler = nextStepNum => {
    setStepNum(nextStepNum);
    // if (nextStepNum === 7) {
    //   navigate('/login');
    //   console.log('이동함');
    // }
  };

  const currentStepComponent = useMemo(() => {
    switch (stepNum) {
      case 1:
        return <SignupStep1 onNextStep={handleNextStep} />;
      case 2:
        return (
          <SignupStep2
            onNextStep={handleNextStep}
            buildingName=""
            officeName=""
          />
        );
      case 3:
        return <SignupStep3 onNextStep={handleNextStep} />;
      case 4:
        return <SignupStep4 onNextStep={handleNextStep} />;
      case 5:
        return <SignupStep5 onNextStep={handleNextStep} />;
      case 6:
        return <SignupStep6 onNextStep={handleNextStep} />;
      default:
        return <SignupStep7 onNextStep={handleNextStep} />;
    }
  }, [stepNum]);

  useEffect(() => {
    console.log(`Step changed to ${stepNum}`);
  }, [stepNum]);

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
