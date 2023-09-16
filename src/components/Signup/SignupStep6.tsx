import { styled } from 'styled-components';

import Header from '@/components/Common/Header';


interface ISignupStep3Props {
  // eslint-disable-next-line no-unused-vars
  setStepNum: (stepNum: number) => void;
}

const SignupStep6 = ({ setStepNum }: ISignupStep3Props) => {
  const handleServiceClick = () => {
    setStepNum(5);
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
          <StyledBox>이름 휴대폰 번호 인증</StyledBox>
        </StyledContainer>
      </StyledLayout>
    </>
  );
};
const StyledLayout = styled.div`
  height: calc(100% - 56px);
  padding: 0 17px;
  display: flex;
  /* background-color: green; */
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: red; */
`;

const StyledBox = styled.div`
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

export default SignupStep6;
