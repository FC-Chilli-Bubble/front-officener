import { useState } from 'react';
import { styled } from 'styled-components';

import Header from '@/components/Common/Header';
import SearchButton from '@/components/Common/SearchButton';
import Button from '@/components/Common/Button';

interface SignupStepProps {
  // eslint-disable-next-line no-unused-vars
  onNextStep: (stepNum: number) => void;
}
const SignupStep2 = ({ onNextStep }: SignupStepProps) => {
  const [disabled, setDisabled] = useState(false); //임시로 false

  const handleServiceClick = () => {
    onNextStep(1);
    console.log('이전 페이지로');
    return;
  };

  const handleBuildingSearch = () => {
    console.log('건물 검색: ');
    // 최초 API 요청할 땐 => '건물검색 : 건물',
    // API 요청 이후 => '건물 검색 : 오피스'
    onNextStep(3);
    return
  };

  // 버튼 클릭 처리 함수 (다음 단계로 이동 또는 다른 작업 수행)
  const handleNextStep = () => {
    onNextStep(4);
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
        <Button
          size={'normal'}
          type={'cta'}
          title={'다음'}
          width={'100%'}
          disabled={disabled}
          onClick={handleNextStep}
        />
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.div`
  height: calc(100% - 56px);
  padding: 0 17px;
  padding-top: 40px;
  /* padding-bottom: 391px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledContainer = styled.div`
  position: absolute;
  padding: 0 3px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  color: ${({ theme }) => theme.colors.black};
  /* background-color: blue; */
`;

const StyledSearchContainer = styled.div`
  position: relative;
  top: 70px;
  height: 187px;
  display: flex;
  flex-direction: column;
  /* background-color: green; */
`;

export default SignupStep2;
