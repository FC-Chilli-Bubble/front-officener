import { useState } from 'react';
import { styled } from 'styled-components';

import Header from '@/components/Common/Header';
import FormField from '@/components/Common/FormField';
// 임시 데이터
// import { buildingData } from '@/components/Signup/buildingData';

interface ISignupStep3Props {
  // eslint-disable-next-line no-unused-vars
  setStepNum: (stepNum: number) => void;
}

const SignupStep3 = ({ setStepNum }: ISignupStep3Props) => {
  const [inputValue, setInputValue] = useState<string>('');
  // const [buildinName, setBuildinName] = useState<string>('');
  // const [searchResults, setSearchResults] = useState<string[]>([]);
  // 검색 결과 상태
  // const [selectedhBuilding, setSelectedBuilding] = useState<string>('건물 이름으로 검색');
  // const [isValid, setIsValid] = useState<boolean>(false);

  const handleServiceClick = () => {
    setStepNum(2);
    console.log('이전 페이지로');
    return;
  };
  //  입력 submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 폼 제출 기본 동작 막기
    handleBuildingSearch(); // 원하는 작업 수행 (예: 검색)
  };
  //  검색 입력 중
  const handleInputChange = (newBuildinName: number | string) => {
    // setBuildinName(newBuildinName.toString());
    setInputValue(newBuildinName.toString());
    console.log('검색 중:', newBuildinName);
  };

  // 버튼 submit
  const handleButtonClick = () => {
    // handleBuildingSearch();
    console.log('검색 버튼 클릭');
  };

  //  검색 수행 함수
  const handleBuildingSearch = () => {
    //  API 호출 함수로직
    // 호출 후
    // const results = buildingData.data.buildings.filter(building =>
    //   building.buildingName.toLowerCase().includes(inputValue.toLowerCase())
    // );
    // setSearchResults(results);
    // setSearchResults(null);
  };

  return (
    <>
      <Header
        title="건물 검색"
        leftIcon="back"
        leftIconClick={handleServiceClick}
      />
      <StyledLayout>
        <StyledLabel htmlFor="search-bar">건물</StyledLabel>
        <StyledFormContainer onSubmit={handleFormSubmit}>
          <FormField
            isType="text"
            label=""
            value={inputValue}
            placeholder="건물 이름으로 검색"
            onChange={handleInputChange}
            errorMessage=""
            redErrorIcon={'none'}
          />
          <StyledButton
            type="button"
            onClick={handleButtonClick}
            disabled={inputValue === ''}>
            검색
          </StyledButton>
        </StyledFormContainer>
        <StyledLine />
        <ul>
          {/* {searchResults.map(building => (
              <li key={building.id}>
                {building.buildingName}
                <button onClick={() => setSelectedBuilding(building)}>하위 오피스 보기</button>
              </li>
            ))} */}
        </ul>
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.div`
  height: calc(100% - 56px);
  padding: 0 17px;
  padding-top: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledFormContainer = styled.form`
  height: 75px;
  display: flex;
  align-items: end;
`;
const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.grayColor5};
  font-weight: 400;
  line-height: 30px;
`;

const StyledButton = styled.button`
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
  top: 30px;
  width: 130%;
  border: 1px solid ${({ theme }) => theme.colors.grayColor3};
`;
export default SignupStep3;
