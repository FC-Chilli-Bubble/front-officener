import { useState } from 'react';
import { styled } from 'styled-components';
// import { useNavigate } from 'react-router-dom';

import SignupStep1 from '@/components/Signup/SignupStep1';
import SignupStep2 from '@/components/Signup/SignupStep2';
import SignupStep3 from '@/components/Signup/SignupStep3';
import SignupStep4 from '@/components/Signup/SignupStep4';

const Register = () => {
  // const navigate = useNavigate();
  // const [isValid, setIsValid] = useState<boolean>(true);
  const [stepNum, setStepNum] = useState<number>(1);

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

  const handleNextStep = () => {
    // 다음 스텝으로 이동하는 로직을 추가하세요.
    setStepNum(stepNum + 1);
  };

  let currentStepComponent;
  let buttonText;

  // stepNum에 따라 현재 스텝의 컴포넌트를 선택합니다.
  if (stepNum === 1) {
    currentStepComponent = <SignupStep1 />;
    buttonText = '다음';
  } else if (stepNum === 2) {
    currentStepComponent = <SignupStep2 setStepNum={setStepNum} />;
    buttonText = '다음';
  } else if (stepNum === 3) {
    currentStepComponent = <SignupStep3 setStepNum={setStepNum} />;
    buttonText = '선택완료';
  } else {
    currentStepComponent = <SignupStep4 setStepNum={setStepNum} />;
    buttonText = '네, 확인했어요!';
  }
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
  /* background-color: blue; */
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

export default Register;
