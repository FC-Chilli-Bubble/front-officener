// import { useState } from 'react';
import { styled } from 'styled-components';

import Header from '@/components/Common/Header';
import TermCheck from '@/components/Signup/TermCheck';

const SignupStep1 = () => {
  // const navigate = useNavigate();

  // 헤더 뒤로가기 버튼
  // const handleServiceClick = (title: string) => {
  //   if (title == '가입약관') {
  //     navigate('/');
  //     console.log('이동함');
  //     return;
  //   }
  // };

  return (
    <>
      <Header
        title="가입약관"
        leftIcon="back"
        // leftIconClick={handleServiceClick}
      />
      <StyledLayout>
        <StyledContainer>
          <StyledBox>
            반가워요!
            <br /> 오피스너입니다.
            <div>
              오피스너 서비스를 이용하기 위해서는 <br />
              약관 동의가 필요해요!
            </div>
          </StyledBox>
          <StyledTermContainer>
            <StyledTermBox>
              <TermCheck />
            </StyledTermBox>
          </StyledTermContainer>
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
  padding: 0 11px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  color: ${({ theme }) => theme.colors.black};
  & > div {
    margin-top: 14px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
`;
const StyledTermContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledTermBox = styled.div`
  height: 158px;
  /* background-color: #2720435e; */
`;

export default SignupStep1;