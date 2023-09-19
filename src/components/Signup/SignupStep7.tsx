import { styled } from 'styled-components';

import Header from '@/components/Common/Header';

interface SignupStepProps {
  // eslint-disable-next-line no-unused-vars
  onNextStep: (stepNum: number) => void;
}

const SignupStep7 = ({ onNextStep }: SignupStepProps) => {
  const handleServiceClick = () => {
    onNextStep(6);
    console.log('이전 페이지로');
    return;
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
          짝짝짝
          <br />
          홍길동님
          <br />
          입주 축하드려요!
          <div>
            미왕빌딩 A동 102(COIPSG)호 칠리버블
            <br />
            관리센터 승인이 완료되었어요.
          </div>
        </StyledContainer>
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.div`
  height: calc(100% - 56px);
  padding: 0 17px;
  display: flex;
  width: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: red; */
`;

const StyledContainer = styled.div`
  height: 95px;
  padding: 0 11px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  /* background: greenyellow; */
  color: ${({ theme }) => theme.colors.ctaColor};
  & > div {
    color: ${({ theme }) => theme.colors.grayColor6};
    margin-top: 14px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
`;

export default SignupStep7;
