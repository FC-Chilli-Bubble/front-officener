import { useState, useEffect, useCallback } from 'react';
import { styled } from 'styled-components';
import { useRecoilValue, useRecoilState } from 'recoil';

import Header from '@/components/Common/Header';
import FormField from '@/components/Common/FormField';
import Button from '@/components/Common/Button';
import { IErrorResponse } from '@/types/Common/IErrorResponse';
import { userBuildingsAtom } from '@/states/buildingAtom';
import { userOfficeAtom } from '@/states/officeAtom';
import { IOffice } from '@/types/Signup/IBuilding';

interface SignupStepProps {
  // eslint-disable-next-line no-unused-vars
  onNextStep: (stepNum: number) => void;
}

const SignupStep3Office = ({ onNextStep }: SignupStepProps) => {
  const [disabled, setDisabled] = useState(false);
  // 검색 입력값
  const [inputValue, setInputValue] = useState('');
  // 검색 결과 상태
  const [searchResults, setSearchResults] = useState<IOffice[]>([]);
  // 선택된 값 상태관리
  const [selectedOffice, setSelectedOffice] = useRecoilState(userOfficeAtom);
  // 선택했던 빌딩 값 받아오기
  const userBuildings = useRecoilValue(userBuildingsAtom);

  const handleServiceClick = () => {
    onNextStep(2);
    return;
  };

  // 선택된 빌딩이 변경될 때마다 버튼을 활성화 여부를 업데이트
  useEffect(() => {
    handleSearchSubmit;
  }, [inputValue]);

  // 검색 폼
  const handleSearchSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // 오피스 배열
      const officeNames = userBuildings.offices.map(office => office);
      console.log(officeNames);
      const results = officeNames.filter(office =>
        office.officeName.toLowerCase().includes(inputValue.toLowerCase())
      );
      console.log(results);
      setSearchResults(results);
      (error: IErrorResponse) => {
        console.log(error.errorMessage);
        return;
      };
    },
    [inputValue]
  );

  // 검색창
  const handleInputChange = (newName: string) => {
    const value = newName;
    setInputValue(value);
  };

  const handleRadioChange = (selectValue: IOffice) => {
    setSelectedOffice(selectValue);
    setDisabled(true);
  };

  const handleNextStep = () => {
    onNextStep(2);
  };

  return (
    <>
      <Header
        title="회사 검색"
        leftIcon="back"
        leftIconClick={handleServiceClick}
      />
      <StyledLayout>
        <StyledFormContainer onSubmit={handleSearchSubmit}>
          <FormField
            isType="text"
            label="회사"
            name="office"
            value={inputValue}
            placeholder="회사명으로 검색"
            onChange={handleInputChange}
            errorMessage=""
          />
          <StyledFormButton
            type="button"
            onClick={handleSearchSubmit}
            disabled={inputValue === ''}>
            검색
          </StyledFormButton>
        </StyledFormContainer>
        <StyledLine />
        <SytledListContainer>
          {searchResults.length > 0 && (
            <StyledListBox>
              {searchResults.map((office: IOffice) => (
                <StyledList key={office.id}>
                  <RadioInput
                    type="radio"
                    name="building"
                    id={office.id.toString()}
                    value={office.id}
                    checked={selectedOffice?.id === office.id}
                    onChange={() => handleRadioChange(office)}
                  />
                  <label htmlFor={office.id.toString()}>{office.officeName}</label>
                </StyledList>
              ))}
            </StyledListBox>
          )}
        </SytledListContainer>
        <StyledButtonContainer>
          <Button
            size="normal"
            type="cta"
            title={disabled ? '선택완료' : '다음'}
            width="100%"
            disabled={!disabled}
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

const SytledListContainer = styled.div`
  height: calc(100% - 300px);
  margin-top: 12px;
`;

const StyledListBox = styled.ul`
  list-style-type: none;
`;

const StyledList = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

const RadioInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.colors.grayColor4};
  background-color: 1.5px solid ${({ theme }) => theme.colors.white};
  /* transition: border 0.2s ease-in-out; */
  cursor: pointer;
  + label {
    font-size: 14px;
    padding: 0 10px;
    color: ${({ theme }) => theme.colors.grayColor5};
    cursor: pointer;
  }
  &:checked {
    border: 4px solid ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.ctaColor};
  }
  &:checked::before {
    content: '';
    display: block;
    position: absolute;
    transform: translate(-24%, -24%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1.5px solid ${({ theme }) => theme.colors.ctaColor};
    background-color: transparent;
  }
  &:hover {
    box-shadow: 0 0 0 max(4px, 0.2em) ${({ theme }) => theme.colors.primaryHoverColor};
    cursor: pointer;
  }
`;

const StyledButtonContainer = styled.div`
  margin: 30px 0;
`;

export default SignupStep3Office;
