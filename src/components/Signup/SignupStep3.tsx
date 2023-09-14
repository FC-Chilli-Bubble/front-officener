import { useState } from 'react';
import { styled } from 'styled-components';

import Header from '@/components/Common/Header';
import Button from '@/components/Common/Button';
import FormFieldButton from '@/components/Common/FormFieldButton';

interface ISignupStep3Props {
  // eslint-disable-next-line no-unused-vars
  setStepNum: (stepNum: number) => void;
}

const SignupStep3 = ({ setStepNum }: ISignupStep3Props) => {
  const [searchBuilding, setSearchBuilding] = useState<string>('');
  const [searchResults, setSearchResults] = useState<string[]>([]); // 검색 결과 상태
  const [selectedhBuilding, setSelectedBuilding] = useState<string>('건물 이름으로 검색');
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleServiceClick = () => {
    setStepNum(2);
    console.log('이전 페이지로');
    return;
  };

  //  검색 입력 중
  const handleBuildingSearch = (buildinginName: string) => {
    setSearchBuilding(buildinginName);
    console.log('검색 중:', buildinginName);
  };

  //  검색 버튼 submit
  const handleSearchButton = () => {
    performSearch();
    console.log('검색 버튼 클릭');
  };

  //  검색 수행 함수
  const performSearch = () => {
    // 실제 검색 로직을 여기에 구현
    // 검색 결과를 setSearchResults로 설정
    // setSearchResults(['결과1', '결과2', ...]);
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
          <StyledSearchBox>
            <FormFieldButton
              isType="text"
              label="건물"
              placeholder={selectedhBuilding}
              value={searchBuilding}
              onChange={handleBuildingSearch}
              size="small"
              title="검색"
              isValid={!isValid}
              onClick={() => {
                handleSearchButton;
              }}
            />
            {/* <Button
              title="검색"
              size="small"
              width="20%"
              disabled={!isValid}
              onClick={() => {
                handleSearchButton;
              }}
            /> */}
          </StyledSearchBox>
          <hr />
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
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
  margin: 70px 0;
  padding-bottom: 290px;
  width: 100%;
  height: 415px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: red; */
  & > hr {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.grayColor3};
  }
`;

// const StyledButton = styled.div`
//   display: flex;
//   margin: 10px 0;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// const StyledTermContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const StyledSearchBox = styled.form`
  height: 75px;
  width: 100%;
  /* background-color: #8080803a; */
`;
export default SignupStep3;
