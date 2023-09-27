import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from "recoil";

import Header from '@/components/Common/Header';
import ProfileImage from '@/assets/img_profile.svg';
import ProfileItem from '@/components/MyPage/ProfileItem';
import Button from '@/components/Common/Button';
import MODAL_DATAS from '@/constants/modalDatas';
import { useModal } from '@/hooks/useModal';
import { userInfoAtom } from "@/states/userDataAtom";

const MyProfile = () => {
  const user = useRecoilValue(userInfoAtom);
  const { openModal } = useModal();
  const navigate = useNavigate();

  const handleClickClose = () => {
    navigate(-1);
  };

  const handleClickLogout = () => {
    openModal(
      {
        ...MODAL_DATAS.LOGOUT_CONFIRM,
        negativeCallback: () => {
          // TODO : 로그아웃 API 함수 호출
          navigate('/intro', { replace: true });
        }
      }
    );
  };

  return (
    <>
      <Header leftIcon='close' title='내 프로필' leftIconClick={handleClickClose} />
      <StyledContainer>
        <div>
          <img src={ProfileImage} alt='profile' />
          <ul>
            <ProfileItem title='이름' content={user.userInfo.name} />
            <ProfileItem title='이메일' content={user.userInfo.email} />
            <ProfileItem title='휴대폰 번호' content={user.userInfo.phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')} />
            <ProfileItem title='성별' content='' />
            <ProfileItem title='생년월일' content='' />
          </ul>
          <StyledDivider />
        </div>
        <StyledButtonBox>
          <Button size='small' type='primary' title='비밀번호 변경' onClick={() => { }} />
          <StyledLogout onClick={handleClickLogout}>로그아웃</StyledLogout>
        </StyledButtonBox>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  padding: 13px 0;
  height: calc(100% - 56px);
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    display: block;
    margin: 0 auto 20px;
    width: 124px;
    height: 124px;
  }

  ul {
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

const StyledDivider = styled.div`
  margin-top: 41px;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grayColor3};
`;


const StyledButtonBox = styled.div`
  padding: 0 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: end;
`;

const StyledLogout = styled.button`
  width: 100%;
  height: 48px;
  padding: 0 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.grayColor1};
  border: none;
  outline: none;
  text-align: center;
  color: rgba(107, 114, 128, 0.40);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; 

  &:hover {
    background: #E5E7EB;
  }
`;

export default MyProfile;