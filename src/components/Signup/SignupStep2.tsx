// import { useState } from 'react';
import { styled } from 'styled-components';
// import { useNavigate } from 'react-router-dom';

import Header from '@/components/Common/Header';
import FormField from '@/components/Common/FormField';

function SignupStep2() {
  // const navigate = useNavigate();

  // 헤더 뒤로가기 버튼
  // const handleServiceClick = (title: string) => {
  //   if (title == '가입약관') {
  //     navigate('/');
  //     console.log('이동함');
  //     return;
  //   }
  // };

  const handleBuildingSearch = (building: string) => {
    console.log('건물 검색: ', building)
  };

  return (
    <>
      <Header
        title="가입약관"
        leftIcon="back"
        // leftIconClick={handleServiceClick}
      />
      <StyledLayout>
        <StyledIntroContainer>
          <StyledItroBox>
            근무하는 오피스를
            <br /> 선택해주세요.
          </StyledItroBox>
          <StyledTermContainer>
            <StyledTermBox>
              <FormField
                isType="text"
                label="건물"
                isRequired
                placeholder="건물이름으로 검색"
                redErrorIcon="none"
                isValid
                value=""
                onChange={handleBuildingSearch}
              />
            </StyledTermBox>
          </StyledTermContainer>
        </StyledIntroContainer>
      </StyledLayout>
    </>
  );
}
const StyledLayout = styled.div`
  padding: 0 17px;
  display: flex;
`;
const StyledIntroContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 557px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledItroBox = styled.div`
  padding: 0 11px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  color: ${({ theme }) => theme.colors.black};
`;
const StyledTermContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledTermBox = styled.div`
  height: 158px;
  background-color: #8080803a;
  display: flex;
`;

export default SignupStep2;
