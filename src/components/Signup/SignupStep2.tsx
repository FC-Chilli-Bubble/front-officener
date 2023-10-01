import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';

import Header from '@/components/Common/Header';
import SearchButton from '@/components/Common/SearchButton';
import SelectedButton from '@/components/Common/SelectedButton';
import Button from '@/components/Common/Button';
import Icon_gray_error from '@/assets/ico_gray_error.svg';
import { userBuildingsAtom } from '@/states/signupRequestAtom';
import { userOfficeAtom } from '@/states/signupRequestAtom';

interface SignupStepProps {
  // eslint-disable-next-line no-unused-vars
  onNextStep: (stepNum: number) => void;
}
const SignupStep2 = ({ onNextStep }: SignupStepProps) => {
  //저장된 빌딩 불러오기
  const userBuildings = useRecoilValue(userBuildingsAtom);
  //저장된 오피스 불러오기
  const userOffice = useRecoilValue(userOfficeAtom);

  const userBuildingName = userBuildings.buildingName;
  const userOfficegName = userOffice.officeName;

  const handleServiceClick = () => {
    onNextStep(1);
    return;
  };

  // 페이지 이동 버튼함수
  const handleNextStep = () => {
    if (userBuildingName && userOfficegName) {
      onNextStep(5);
      return;
    }
  };

  // 빌딩 선택 버튼
  const handleBuildingSelect = () => {
    onNextStep(3); //SignupStep3
  };

  // 오피스 선택 버튼
  const handleOfficeSelect = () => {
    onNextStep(4); //SignupStep3Office
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
          {!userBuildingName ? (
            <SearchButton
              label="건물"
              placeholder={'나의 오피스 찾기'}
              onClick={handleBuildingSelect}
            />
          ) : (
            <SelectedButton
              label="건물"
              placeholder={userBuildingName}
              onClick={handleBuildingSelect}
            />
          )}
          {userBuildingName && (
            <>
              {!userOfficegName ? (
                <SearchButton
                  label="오피스"
                  placeholder="오피스 찾기"
                  onClick={handleOfficeSelect}
                />
              ) : (
                <SelectedButton
                  label="오피스"
                  placeholder={userOfficegName}
                  onClick={handleOfficeSelect}
                />
              )}
              <StyledIErrorMessage>
                <StyledImage
                  src={Icon_gray_error}
                  alt=""
                />
                <span>입주사 목록에 내 회사가 없다면 관리센터로 문의 주세요!</span>
              </StyledIErrorMessage>
            </>
          )}
        </StyledSearchContainer>
        <StyledButtonContainer>
          <Button
            size="normal"
            type="cta"
            title="다음"
            width="100%"
            disabled={!(userBuildingName && userOfficegName)}
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
const StyledIErrorMessage = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.grayColor4};
  font-size: 10px;
  margin-top: 8px;
`;

const StyledImage = styled.img`
  margin: 0 5px;
`;

const StyledButtonContainer = styled.div`
  margin: 30px 0;
`;

export default SignupStep2;
