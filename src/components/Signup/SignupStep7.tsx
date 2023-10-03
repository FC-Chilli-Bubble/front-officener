import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import Header from '@/components/Common/Header';
import { userDataAtom, userBuildingsAtom, userOfficeAtom } from '@/states/signupRequestAtom';

interface SignupStepProps {
  // eslint-disable-next-line no-unused-vars
  onNextStep: (stepNum: number) => void;
}

const SignupStep7 = ({ onNextStep }: SignupStepProps) => {
  // 리코일에서 받아온 상태값
  const userInfo = useRecoilValue(userDataAtom);
  const userName = userInfo.name;

  const userBuilding = useRecoilValue(userBuildingsAtom);
  const userBuildingName = userBuilding.buildingName;

  const userOffice = useRecoilValue(userOfficeAtom);
  const userOfficeName = userOffice.officeName;
  const officeNum = userOffice.officeNum;

  const navigate = useNavigate();
  const clearUser = useResetRecoilState(userBuildingsAtom);
  const clearData = useResetRecoilState(userOfficeAtom);

  const handleServiceClick = () => {
    onNextStep(7);
    return;
  };
  // 로그인 페이지 이동 버튼
  const handleNavigate = () => {
    //회원가입 과정이 끝나면 저장된 값 삭제
    clearUser();
    clearData();
    navigate('/login', { replace: true });
    return;
  };

  return (
    <>
      <Header
        title="회원가입"
        leftIcon="back"
        leftIconClick={handleServiceClick}
      />
      <StyledLayout>
        <StyledContainer>
          짝짝짝
          <br />
          {userName}님
          <br />
          입주 축하드려요!
          <div>
            {userBuildingName} {officeNum} {userOfficeName}
            <br />
            관리센터 승인이 완료되었어요.
          </div>
        </StyledContainer>
        <StyledCLick onClick={handleNavigate}>닫기</StyledCLick>
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.div`
  height: calc(100% - 56px);
  padding: 0 17px;
  display: flex;
  width: 100%;
  padding-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 95px;
  padding: 0 11px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  color: ${({ theme }) => theme.colors.ctaColor};
  & > div {
    color: ${({ theme }) => theme.colors.grayColor6};
    margin-top: 14px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
`;
const StyledCLick = styled.a`
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 32px;
  padding: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grayColor6};
`;

export default SignupStep7;
