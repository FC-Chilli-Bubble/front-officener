import { styled } from "styled-components";

import HomeHeader from "@/components/Home/HomeHeader";
import IconRight from '@/assets/ico_right_arrow_g.svg';
import { HOME_OFFICE } from "@/constants/commonUiData";
import { HOME_SERVICES } from "@/constants/serviceMenus";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const handleServiceClick = (title: string) => {
    if (title === '엘리베이터') {
      navigate('/elevator');
      return;
    }
  };

  return (
    <>
      <HomeHeader />
      <StyledContainer>
        {/* 빌딩 정보 */}
        <StyledBuildingInfo>
          <h3>미왕빌딩</h3>
          <p>A동 102(COIPSG)호 칠리버블 </p>
        </StyledBuildingInfo>
        <StyledBox>
          {/* 우리 오피스 소식 */}
          <StyledOfficeInfo>
            <div className="title">
              <h6>우리 오피스 소식</h6>
              <div className="title__more">
                <span>더보기</span>
                <img src={IconRight} alt="더보기" />
              </div>
            </div>
            <StyledDivider />
            <ul>
              {
                HOME_OFFICE.map(item => (<li key={item.title}>
                  <h6>{item.title}</h6>
                  <div>{item.content}</div>
                </li>))
              }
            </ul>
          </StyledOfficeInfo>

          {/* 서비스 */}
          <StyledServiceBox>
            <h6>입주자 전용 서비스</h6>
            <StyledDivider />
            <ul>
              {
                HOME_SERVICES.map(service => (
                  <li key={service.title} onClick={() => { handleServiceClick(service.title); }}>
                    <div>
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <p>{service.title}</p>
                  </li>
                ))
              }
            </ul>
          </StyledServiceBox>

        </StyledBox>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  position: relative;
`;

const StyledBuildingInfo = styled.div`
  width: 100%;
  padding: 123px 0 61px 25px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.marinblueColor};

  h3 {
    font-size: 18px;
    font-weight: 700;
    height: 34px;
  }

  p {
    font-size: 12px;
    font-weight: 600;
  }
`;

const StyledBox = styled.div`
  padding: 0 16px 16px;
`;

const StyledOfficeInfo = styled.div`
  width: 100%;
  padding: 19px 14px 14px;
  box-shadow: ${({ theme }) => theme.dropShadow.depth1};
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: -45px;
  margin-bottom: 4px;
  border-radius: 16px;

  .title {
    display: flex;
    justify-content: space-between;
    padding-right: 16px;
    color: #696F79;
    font-size: 12px;  
  
    .title__more {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
    }
  }

    li {
      display: flex;
      font-size: 12px;
      line-height: 18px;
      color: ${({ theme }) => theme.colors.grayColor5};
      gap: 8px;

      h6 {
        width: 45px;
        color: ${({ theme }) => theme.colors.grayColor9};
      }

      div {
        cursor: pointer;
      }
    }
`;

const StyledServiceBox = styled.div`
  width: 100%;
  padding: 19px 17px;
  box-shadow: ${({ theme }) => theme.dropShadow.depth1};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  color: #696F79;

  h6 {
    font-size: 12px;  
    font-weight: 500;
    line-height: 18px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    grid-row-gap: 21px;

    li {
      cursor: pointer;

      div {
        width: 44px;
        height: 44px;
        border-radius: 8px;
        background: #DAE9FE;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      p {
        font-size: 10px;
        line-height: 15px;
        margin-top: 4px;
        text-align: center;
      }
    }

  }
`;

const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  margin: 12px 0;
  background-color:  ${({ theme }) => theme.colors.grayColor1}; 
`;

export default Home;