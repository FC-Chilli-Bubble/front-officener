import HomeHeader from '@/components/Home/HomeHeader';
import styled from 'styled-components';
import { useRecoilValue } from "recoil";

import ProfileImage from '@/assets/img_profile.svg';
import { MY_PAGE_MENU } from '@/constants/commonUiData';
import MyPageMenu from '@/components/MyPage/MyPageMenu';
import { userInfoAtom } from "@/states/userDataAtom";

const MyPage = () => {
  const user = useRecoilValue(userInfoAtom);

  return (
    <>
      <HomeHeader />
      <StyledInfoBox>
        <StyledUserInfo>
          <div>
            <p>{user.userInfo.name}님</p>
            <div></div>
            <span>일반멤버</span>
          </div>
          <div>
            <p>{user.userInfo.building.buildingName} {user.userInfo.company.officeNum}</p>
            <p>{user.userInfo.company.officeName}</p>
          </div>
        </StyledUserInfo>
        <img src={ProfileImage} alt='Profile' />
      </StyledInfoBox>
      <ul>
        {
          MY_PAGE_MENU.map(menu => <MyPageMenu title={menu.title} path={menu.path} key={menu.title} />)
        }
      </ul>
    </>
  );
};

const StyledInfoBox = styled.div`
  width: 100%;
  padding: 30px 19px;
  color:  ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.marinblueColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  img {
    width: 72px;
    height: 72px;
  }
`;

const StyledUserInfo = styled.div`
  div:first-child {
    display: flex;
    margin-bottom: 13px;
    align-items: center;

    p {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
    }

    div {
      width: 1px;
      height: 18px;
      background-color: ${({ theme }) => theme.colors.white};
      margin: 0 6px 0 10px;
    }

    span{
      font-size: 12px;
      line-height: 18px;
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    gap: 4px;
    
    p {
      font-size: 12px;
      font-weight: 700;
    }
  }
`;

export default MyPage;