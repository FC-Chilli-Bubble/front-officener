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
  const [inputValue, setInputValue] = useState<string>('');
  const [disabled, setDisabled] = useState(false); //임시로 false
  const [buttonText, setButtonText] = useState('다음');

  // const [buildinName, setBuildinName] = useState<string>('');
  // const [searchResults, setSearchResults] = useState<string[]>([]);
  // 검색 결과 상태
  // const [selectedhBuilding, setSelectedBuilding] = useState<string>('건물 이름으로 검색');
  // const [isValid, setIsValid] = useState<boolean>(false);

  const handleServiceClick = () => {
    onNextStep(2);
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
  const handleNextStep = () => {
    setButtonText('선택완료'); //이 페이지에선 버튼명 변경 없음 //삭제할것
    onNextStep(2);
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
        <StyledFormContainer onSubmit={handleFormSubmit}>
          <FormField
            isType={'text'}
            label={'건물'}
            name={'text'}
            value={inputValue}
            placeholder="건물 이름으로 검색"
            onChange={handleInputChange}
            errorMessage=""
            redErrorIcon={'none'}
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
                <button onClick={() => setSelectedBuilding(building)}>하위 오피스 보기</button>
              </li>
            ))} */}
        </StyledListBox>
        <Button
          size={'normal'}
          type={'cta'}
          title={buttonText}
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
`;

const StyledFormContainer = styled.form`
  height: 75px;
  display: flex;
  align-items: end;
  /* background-color: green; */
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
  top: 30px;
  width: 130%;
  border: 1px solid ${({ theme }) => theme.colors.grayColor3};
`;

const StyledListBox = styled.div`
  margin-top: 40px;
  height: calc(100% - 315px);
`;

export default SignupStep3;
