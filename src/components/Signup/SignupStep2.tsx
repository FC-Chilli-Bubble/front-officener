import { useState } from 'react';
import { styled } from 'styled-components';

import Header from '@/components/Common/Header';
import SearchButton from '@/components/Common/SearchButton';
import Button from '@/components/Common/Button';

interface SignupStepProps {
  // eslint-disable-next-line no-unused-vars
  onNextStep: (stepNum: number) => void;
  buildingName: string;
  officeName: string;
}
const SignupStep2 = ({ onNextStep, buildingName, officeName }: SignupStepProps) => {
  const [disabled, setDisabled] = useState(false); //임시로 false
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [selectedOffice, setSelectedOffice] = useState('');

  const handleServiceClick = () => {
    onNextStep(1);
    console.log('이전 페이지로');
    return;
  };

  // 페이지 이동 버튼함수
  const handleNextStep = () => {
    onNextStep(4);
  };
  // 빌딩 선택 버튼
  const handleBuildingSelect = () => {
    onNextStep(3);
    // onNextStep(3, selectedBuilding);
    // 여기서 선택된 건물을 사용하도록 설정
    setSelectedBuilding(buildingName); // 선택된 건물에 대한 로직 추가
    setDisabled(false); // 에러때문에 임시 작성
    // setDisabled(selectedOffice === '');
  };
  // 오피스 선택 버튼
  const handleOfficeSelect = () => {
    onNextStep(3);
    // onNextStep(3, selectedOffice);
    // 여기서 선택된 오피스를 사용하도록 설정
    setSelectedOffice(officeName); // 선택된 오피스에 대한 로직 추가
    // setDisabled(selectedBuilding === '');
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
            placeholder={selectedBuilding || '나의 오피스 찾기'}
            onClick={handleBuildingSelect}
          />
          {selectedBuilding && (
            <SearchButton
              label="오피스"
              placeholder={selectedOffice || '오피스 찾기'}
              onClick={handleOfficeSelect}
            />
          )}
        </StyledSearchContainer>
        <StyledButtonContainer>
          <Button
            size="normal"
            type="cta"
            title="다음"
            width="100%"
            disabled={disabled}
            onClick={handleNextStep}
          />
        </StyledButtonContainer>
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.div`
  height: calc(100% - 56px);
  padding: 0 17px;
  padding-top: 40px;
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
`;

const StyledSearchContainer = styled.div`
  position: relative;
  top: 70px;
  height: 187px;
  display: flex;
  flex-direction: column;
`;

const StyledButtonContainer = styled.div`
  margin: 30px 0;
`;

export default SignupStep2;
