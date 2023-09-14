import { styled } from 'styled-components';

import Header from '@/components/Common/Header';
import ico_building from '@/assets/ico_building.svg';

interface ISignupStep3Props {
  // eslint-disable-next-line no-unused-vars
  setStepNum: (stepNum: number) => void;
}

const SignupStep4 = ({ setStepNum }: ISignupStep3Props) => {
  const handleServiceClick = () => {
    setStepNum(2);
    console.log('이전 페이지로');
    return;
  };

  return (
    <>
      <Header
        title="가입 약관"
        leftIcon="back"
        leftIconClick={handleServiceClick}
      />
      <StyledLayout>
        <StyledContainer>
          <StyledBox>
            미왕빌딩
            <br />
            입주자시군요!
            <div>입주 정보를 확인해 주세요.</div>
          </StyledBox>
          <StyledCardBox>
            <SytledCard>
              오피스너
              <br />
              입주카드
              <img
                src={ico_building}
                alt="빌딩Img"
              />
              <div>미왕빌딩</div>
              <div>서울 강남구 강남대로</div>
              <div>A동 103(COIPSG)호</div>
              <div>칠리버블</div>
            </SytledCard>
            <StyledLink>나의 입주 정보와 다르다면? </StyledLink>
          </StyledCardBox>
        </StyledContainer>
      </StyledLayout>
    </>
  );
};
const StyledLayout = styled.div`
  padding: 0 17px;
  display: flex;
`;
const StyledContainer = styled.div`
  margin-top: 40px;
  height: 566px;
  width: 100%;
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
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: green; */
`;
const SytledCard = styled.div`
  height: 310px;
  width: 236px;
  padding: 20px;
  color: ${({ theme }) => theme.colors.grayColor6};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.dropShadow.depth1};
  border-radius: 20px;
`;
const StyledLink = styled.a`
  padding: 20px;
  color: ${({ theme }) => theme.colors.ctaColor};
  cursor: pointer;
`;

export default SignupStep4;
