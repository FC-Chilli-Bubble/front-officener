import { useState, useMemo, useEffect } from 'react';
import { styled } from 'styled-components';

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


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNextStep: IStepHandler = nextStepNum => {
    setStepNum(nextStepNum);
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
      <StyledLayout>
        <StyledContainer>{currentStepComponent}</StyledContainer>
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledContainer = styled.div`
  height: 100%;
`;

export default Signup;
