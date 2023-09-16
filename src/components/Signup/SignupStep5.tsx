import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Header from '@/components/Common/Header';

const SignupStep5 = () => {
  const navigate = useNavigate();
  const handleServiceClick = () => {
    navigate('/intro/register');
    console.log('이동함');
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
          <StyledBox>회원가입 이메일 비번</StyledBox>
          <StyledCardBox>
            <StyledTitle>
              오피스너
              <br />
              입주카드
            </StyledTitle>
          </StyledCardBox>
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
const StyledCardBox = styled.div`
  height: 415px;
  width: 100%;
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* background-color: green; */
`;

const StyledTitle = styled.div`
  padding: 10px 0;
  line-height: 18px;
`;

export default SignupStep5;
