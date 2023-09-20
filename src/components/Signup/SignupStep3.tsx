import { useState } from 'react';
import { styled } from 'styled-components';

import Header from '@/components/Common/Header';
import FormField from '@/components/Common/FormField';
import Button from '@/components/Common/Button';

// 임시 데이터
// import { buildingData } from '@/components/Signup/buildingData';

interface SignupStepProps {
  // eslint-disable-next-line no-unused-vars
  onNextStep: (stepNum: number) => void;
}

const SignupStep3 = ({ onNextStep }: SignupStepProps) => {
  // Step2에서 가져온 props
  // const [buildingName, setBuildingName] = useState('');
  // const [officeName, setOfficeName] = useState('');
  // 검색 입력값
  const [inputValue, setInputValue] = useState('');
  // 버튼 상태값
  const [disabled, setDisabled] = useState(false); //임시로 false

  // const [searchResults, setSearchResults] = useState<string[]>([]);
  // 검색 결과 상태
  // const [selectedhBuilding, setSelectedBuilding] = useState<string>('건물 이름으로 검색');
  // const [isValid, setIsValid] = useState<boolean>(false);

  const handleServiceClick = () => {
    onNextStep(2);
    console.log('이전 페이지로');
    return;
  };
  // 검색 폼
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 폼 제출 기본 동작 막기
    // handleSearchChange(); // 원하는 작업 수행 (예: 검색)
  };
  // 검색창
  const handleInputChange = (newBuildingName: string) => {
    setInputValue(newBuildingName);
    console.log('검색 중:', newBuildingName);
  };

  // 검색 버튼
  const handleButtonClick = () => {
    // handleBuildingSearch();
    setDisabled(false); // 에러방지 임시 작성 지울것!!!
    console.log('검색 버튼 클릭');
  };
  // 선택된 건물을 처리하는 함수
  // const handleBuildingSelect = (newBuildingName: string) => {
  //   setBuildingName(newBuildingName);
  //   console.log('선택:', newBuildingName);
  // };
  // 선택된 오피스를 처리하는 함수
  // const handleOfficeSelect = (selectedOffice: string) => {
  //   setBuildingName(selectedOffice);
  //   console.log('선택:', selectedOffice);
  // };

  //  검색 수행 함수
  // const handleSearchChange = (e: string) => {
  //   const name = e.target.value;
  //   setInputValue(name);
  //  API 호출 함수로직
  // 호출 후
  // const results = buildingData.data.buildings.filter(building =>
  //   building.buildingName.toLowerCase().includes(inputValue.toLowerCase())
  // );
  // setSearchResults(results);
  // setSearchResults(null);
  // };

  // 검색 결과 항목을 클릭할 때 호출되는 함수
  // 빌딩과 오피스 두가지 필요
  // const handleResultClick = item => {
  //   setSelectedItem(item);
  //   onNextStep(2, building.buildingName, item.officeName);
  //   setDisabled(false); // 선택하면 다음 버튼 활성화
  // };

  const handleNextStep = () => {
    // onNextStep(2, building.buildingName, item.officeName);
    onNextStep(2);
  };

  return (
    <>
      <Header
        title="건물 검색"
        leftIcon="back"
        leftIconClick={handleServiceClick}
      />
      <StyledLayout>
        <StyledFormContainer onSubmit={handleFormSubmit}>
          <FormField
            isType="text"
            label="건물"
            name="building"
            value={inputValue}
            placeholder="건물 이름으로 검색"
            onChange={handleInputChange}
            errorMessage=""
            redErrorIcon="none"
          />
          <StyledFormButton
            type="button"
            onClick={handleButtonClick}
            disabled={inputValue === ''}>
            검색
          </StyledFormButton>
        </StyledFormContainer>
        <StyledLine />
        {/* Ul은 컴포넌트화 할 예정 */}
        <StyledListBox>
          {/* {searchResults.map(building => (
              <li key={building.id}>
                {building.buildingName}
                <button onClick={() => handleResultClick(building)}>하위 오피스 보기</button>
              </li>
            ))} */}
        </StyledListBox>
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

const StyledFormContainer = styled.form`
  height: 75px;
  display: flex;
  align-items: end;
`;

const StyledFormButton = styled.button`
  width: 78px;
  height: 48px;
  padding: 0 10px;
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.grayColor1 : theme.colors.ctaColor};
  color: ${({ disabled, theme }) => (disabled ? theme.colors.grayColor4 : theme.colors.white)};
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:active {
    background-color: ${({ theme }) => theme.colors.ctaPressedColor};
  }
`;

const StyledLine = styled.hr`
  position: relative;
  left: -17px;
  top: 0.5rem;
  width: 130%;
  border: 1px solid ${({ theme }) => theme.colors.grayColor3};
`;

const StyledListBox = styled.div`
  height: calc(100% - 300px);
  margin-top: 12px;
`;

const StyledButtonContainer = styled.div`
  margin: 30px 0;
`;

export default SignupStep3;
