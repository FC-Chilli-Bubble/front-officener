import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';

import {
  agreementCheckboxAtom,
  signupAccountAtom,
  userDataAtom,
  userBuildingsAtom,
  userOfficeAtom
} from '@/states/signupRequestAtom';

const Intro = () => {
  const navigate = useNavigate();
  const resetUserData = useResetRecoilState(userDataAtom);
  const resetAgreementCheckbox = useResetRecoilState(agreementCheckboxAtom);
  const resetSignupAccount = useResetRecoilState(signupAccountAtom);
  const resetUserBuildings = useResetRecoilState(userBuildingsAtom);
  const resetUserOffice = useResetRecoilState(userOfficeAtom);

  // 초기화 함수를 호출하여 해당 상태를 초기화할 수 있습니다.
  const handleReset = () => {
    resetUserData();
    resetAgreementCheckbox();
    resetSignupAccount();
    resetUserBuildings();
    resetUserOffice();
  };

  const handleNavigateSignup = () => {
    navigate('/intro/signup');
    handleReset();
    return;
  };
  const handleNavigateLogin = () => {
    navigate('/login');
    return;
  };

  return (
    <>
      <StyledLayout>
        <StyledItroText>
          편리한 오피스 생활의 시작 <span>오피스너</span>
          <div>
            지금까지 경험하지 못한 <br />
            스마트 오피스 생활을 경험해보세요!
          </div>
        </StyledItroText>
        <StyledButton onClick={handleNavigateSignup}>오피스너 시작하기</StyledButton>
        <StyledLogin>
          오피스너 계정이 있으시면?
          <StyledSignupBox onClick={handleNavigateLogin}>로그인</StyledSignupBox>
        </StyledLogin>
      </StyledLayout>
    </>
  );
};
const StyledLayout = styled.div`
  padding: 0 17px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.ctaColor};
`;
const StyledItroText = styled.div`
  padding: 0 21px;
  margin-bottom: 94px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  & > span {
    padding: 22px 0;
    font-weight: 400;
    font-size: 36px;
    line-height: 27px;
  }
  & > div {
    font-weight: 400;
    font-size: 16px;
    line-height: normal;
  }
`;
const StyledButton = styled.button`
  width: 100%;
  height: 60px;
  margin: 17px 0;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.ctaColor};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

const StyledLogin = styled.div`
  color: ${({ theme }) => theme.colors.white};
  padding-left: 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const StyledSignupBox = styled.a`
  color: ${({ theme }) => theme.colors.white};
  margin-left: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export default Intro;
