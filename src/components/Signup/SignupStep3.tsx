import { useState } from 'react';
import { styled } from 'styled-components';

import Header from '@/components/Common/Header';
// 임시 데이터
import { buildingData } from '@/components/Signup/buildingData';

interface ISignupStep3Props {
  placeholder: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  setStepNum: (stepNum: number) => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  onClick: () => void;
  disabled?: boolean;
}

const SignupStep3 = ({ setStepNum }: ISignupStep3Props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<string[]>([]); // 검색 결과 상태
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
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const value = e.target.value;
    setInputValue(value);
    console.log('검색 중:', value);
  };

  // 버튼 submit
  const handleButtonClick = () => {
    handleBuildingSearch();
    console.log('검색 버튼 클릭');
  };

  //  검색 수행 함수
  const handleBuildingSearch = () => {
    //  API 호출 함수로직
    // 호출 후
    const results = buildingData.data.buildings.filter(building =>
      building.buildingName.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchResults(results);
    setSearchResults(null);
  };

  return (
    <>
      <Header
        title="건물 검색"
        leftIcon="back"
        leftIconClick={handleServiceClick}
      />
      <StyledLayout>
        <StyledContainer>
          <StyledLabel htmlFor="search-bar">건물</StyledLabel>
          <StyledFormBox onSubmit={handleFormSubmit}>
            <StyledInput
              id="search-bar"
              type="text"
              placeholder="건물 이름으로 검색"
              value={inputValue}
              onChange={handleInputChange}
            />
            <StyledButton
              type="button"
              onClick={handleButtonClick}
              disabled={inputValue === ''}>
              검색
            </StyledButton>
          </StyledFormBox>
          <StyledLine />
          <ul>
            {searchResults.map(building => (
              <li key={building.id}>
                {building.buildingName}
                <button onClick={() => setSelectedBuilding(building)}>하위 오피스 보기</button>
              </li>
            ))}
          </ul>
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
  padding-top: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* background-color: red; */
`;

const StyledFormBox = styled.form`
  height: 75px;
  display: flex;
  /* background-color: #808080; */
`;
const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.grayColor5};
  font-weight: 400;
  line-height: 30px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 13px 24px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grayColor4};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayColor3};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.grayColor9};
    border: 1px solid ${({ theme }) => theme.colors.marinblueColor};
    &::placeholder {
      color: transparent;
    }
  }
`;
const StyledButton = styled.button`
  width: 78px;
  height: 48px;
  padding: 0 10px;
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
