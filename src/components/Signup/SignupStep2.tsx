// import { useState } from 'react';
import { styled } from 'styled-components';

import Header from '@/components/Common/Header';
import SearchButton from '@/components/Common/SearchButton';

interface ISignupStep2Props {
  // eslint-disable-next-line no-unused-vars
  setStepNum: (stepNum: number) => void;
}

const SignupStep2 = ({ setStepNum }: ISignupStep2Props) => {
  const handleServiceClick = () => {
    setStepNum(1);
    console.log('이전 페이지로');
    return;
  };
  const handleBuildingSearch = () => {
    console.log('건물 검색: ');
    // 최초 API 요청할 땐 => '건물검색 : 건물',
    setStepNum(3);
    // API 요청 이후 => '건물 검색 : 오피스'
  };

  return (
    <>
      <Header
        title="근무 위치 등록"
        leftIcon="back"
        leftIconClick={handleServiceClick}
      />
      <StyledLayout>
        <StyledContainer>
          근무하는 오피스를
          <br /> 선택해주세요.
        </StyledContainer>
        <StyledSearchContainer>
          <SearchButton
            label="건물"
            placeholder="나의 오피스 찾기"
            onClick={handleBuildingSearch}
          />
        </StyledSearchContainer>
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  padding: 0 17px;
  padding-top: 40px;

  padding-bottom: 391px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: red; */
`;
const StyledContainer = styled.div`
  padding: 0 3px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  color: ${({ theme }) => theme.colors.black};
`;
const StyledSearchContainer = styled.div`
  height: 187px;
  display: flex;
  flex-direction: column;
`;


export default SignupStep2;
