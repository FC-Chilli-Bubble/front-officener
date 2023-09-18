import { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import SignupStep5 from '@/components/Signup/SignupStep5';
import SignupStep6 from '@/components/Signup/SignupStep6';
import SignupStep7 from '@/components/Signup/SignupStep7';

const SignupTest = () => {
  const [stepNum, setStepNum] = useState<number>(5);
  const navigate = useNavigate();
  // const [isValid, setIsValid] = useState<boolean>(true);

  // 헤더 뒤로가기 버튼
  // const handleServiceClick = (title: string) => {
  //   if (title == '가입약관') {
  //     navigate('/');
  //     console.log('이동함');
  //     return;
  //   }
  // };

  // // ⚠️임시 코드
  // const Sample = () => {
  //   setIsValid(false);
  // };
  // Sample();

  let currentStepComponent;
  let buttonText;

  if (stepNum === 5) {
    currentStepComponent = <SignupStep5 setStepNum={setStepNum} />;
    buttonText = '다음';
  } else if (stepNum === 6) {
    currentStepComponent = <SignupStep6 setStepNum={setStepNum} />;
    buttonText = '다음';
  } else {
    currentStepComponent = <SignupStep7 setStepNum={setStepNum} />;
    buttonText = '닫기!';
  }

  const handleNextStep = () => {
    if (stepNum === 7) {
      navigate('/login');
      console.log('이동함');
      return;
    } else {
      setStepNum(stepNum + 1);
      console.log('이동함');
    }
  };

  return (
    <>
      <StyledLayout>
        <SytledComponent>
          <StyledBox>{currentStepComponent}</StyledBox>
          <StyledButton
            // disabled={!isValid}
            onClick={handleNextStep}>
            {buttonText}
          </StyledButton>
        </SytledComponent>
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.div`
  height: 100vh;
`;
const SytledComponent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledBox = styled.div`
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

export default SignupTest;
