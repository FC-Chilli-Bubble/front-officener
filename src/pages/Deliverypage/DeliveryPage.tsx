import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { foodData, dummyChatData } from './dummyData';

interface IFoodData {
  사진?: string;
  가게이름: string;
  참여인원: number;
  배달비: string;
  태그: string[];
  이체해야하는시간: string;
}

const ChatItem: React.FC<IChatData> = ({ profileImage, name, message }) => {
  return (
    <>
      <StyledChatItem>
        <img
          src={profileImage}
          alt="Profile"
        />
        <div>
          <strong>{name}</strong>
          <p>{message}</p>
        </div>
      </StyledChatItem>
      <StyledDivider />
    </>
  );
};

const TopMenu = ({ selectedMenu, handleMenuClick }) => {
  return (
    <StyledMenu>
      <TopMenuButton
        className={selectedMenu === '함께배달' ? 'active' : ''}
        onClick={() => handleMenuClick('함께배달')}>
        함께배달
      </TopMenuButton>
      <TopMenuButton
        className={selectedMenu === '내가 참여한 배달' ? 'active' : ''}
        onClick={() => handleMenuClick('내가 참여한 배달')}>
        내가 참여한 배달
      </TopMenuButton>
      <TopMenuButton
        className={selectedMenu === '나의 채팅' ? 'active' : ''}
        onClick={() => handleMenuClick('나의 채팅')}>
        나의 채팅
      </TopMenuButton>
    </StyledMenu>
  );
};

const TogetherDelivery = ({ selectedCategory }) => {
  return (
    <>
      <Heading>
        함께 배달 <br />
        <SubHeadingContainer>
          <SubHeading>곧 마감이에요!</SubHeading>
          <Icon
            src="src/assets/food/Time.svg"
            alt="Icon Description"
          />
        </SubHeadingContainer>
      </Heading>
      <FoodCardContainer>
        {foodData[selectedCategory].map(food => (
          <FoodItem
            key={food.가게이름}
            food={food}
          />
        ))}
      </FoodCardContainer>
    </>
  );
};

const MenuContent = ({ selectedMenu, selectedCategory, handleCategoryClick, data }) => {
  if (selectedMenu === '함께배달') {
    return (
      <div>
        <TogetherDelivery selectedCategory={selectedCategory} />
        <OrderList
          data={data}
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
        />
        <FoodItem
          food={data}
          showTimeLimit={false}
          listStyle
        />
        <FoodItem
          food={data}
          showTimeLimit={false}
          listStyle
        />
        <FoodItem
          food={data}
          showTimeLimit={false}
          listStyle
        />
        <FoodItem
          food={data}
          showTimeLimit={false}
          listStyle
        />
      </div>
    );
  } else if (selectedMenu === '내가 참여한 배달') {
    return (
      <div>
        <FoodItem
          food={data}
          showTimeLimit={false}
          listStyle
        />
      </div>
    );
  } else if (selectedMenu === '나의 채팅') {
    return (
      <div>
        {dummyChatData.map(chat => (
          <ChatItem
            key={chat.name}
            profileImage={chat.profileImage}
            name={chat.name}
            message={chat.message}
          />
        ))}
      </div>
    );
  }
  return null;
};

const OrderList = ({ selectedCategory, handleCategoryClick }) => {
  return (
    <>
      <Heading>함께 주문 리스트</Heading>
      <MenuContainer>
        <CategoryButton
          className={selectedCategory === '분식' ? 'active' : ''}
          onClick={() => handleCategoryClick('분식')}>
          분식
        </CategoryButton>
        <CategoryButton
          className={selectedCategory === '족발,보쌈' ? 'active' : ''}
          onClick={() => handleCategoryClick('족발,보쌈')}>
          족발, 보쌈
        </CategoryButton>
        <CategoryButton
          className={selectedCategory === '회, 일식' ? 'active' : ''}
          onClick={() => handleCategoryClick('회,일식')}>
          회, 일식
        </CategoryButton>
        <CategoryButton
          className={selectedCategory === '찜, 탕, 찌개' ? 'active' : ''}
          onClick={() => handleCategoryClick('찜, 탕, 찌개')}>
          찜, 탕, 찌개
        </CategoryButton>
        <CategoryButton
          className={selectedCategory === '피자' ? 'active' : ''}
          onClick={() => handleCategoryClick('회,일식')}>
          피자
        </CategoryButton>
        <CategoryButton
          className={selectedCategory === '치킨' ? 'active' : ''}
          onClick={() => handleCategoryClick('회,일식')}>
          치킨
        </CategoryButton>
        <CategoryButton
          className={selectedCategory === '아시안' ? 'active' : ''}
          onClick={() => handleCategoryClick('회,일식')}>
          아시안
        </CategoryButton>
        <CategoryButton
          className={selectedCategory === '백반' ? 'active' : ''}
          onClick={() => handleCategoryClick('회,일식')}>
          백반
        </CategoryButton>
        <CategoryButton
          className={selectedCategory === '카페, 디저트' ? 'active' : ''}
          onClick={() => handleCategoryClick('회,일식')}>
          카페, 디저트
        </CategoryButton>
      </MenuContainer>
    </>
  );
};

const FoodItem: React.FC<{
  food: IFoodData;
  showTimeLimit?: boolean;
  listStyle?: boolean;
}> = ({ food, showTimeLimit = true, listStyle = false }) => {
  if (listStyle) {
    return (
      <StyledFoodCardListStyle>
        <img
          src={food?.사진}
          alt="음식 사진"
        />
        <StyledFoodInfoListStyle>
          <StyledRow>
            <ListGrayText>가게이름</ListGrayText> <ListBlackText>{food?.가게이름}</ListBlackText>
          </StyledRow>
          <StyledRow>
            <ListGrayText>참여 인원</ListGrayText> <ListBlackText>{food?.참여인원}</ListBlackText>
          </StyledRow>
          <StyledRow>
            <ListGrayText>배달비</ListGrayText> <ListBlackText>{food?.배달비}</ListBlackText>
          </StyledRow>
          <StyledRow>
            <ListGrayText>태그</ListGrayText> <ListBlackText>{food?.태그.join(', ')}</ListBlackText>
          </StyledRow>
          <StyledRow>
            <ListGrayText>이체 마감 시간</ListGrayText>{' '}
            <ListBlackText>{food?.이체해야하는시간}</ListBlackText>
          </StyledRow>
        </StyledFoodInfoListStyle>
      </StyledFoodCardListStyle>
    );
  }

  return (
    <StyledFoodCard>
      <img
        src={food?.사진}
        alt="음식 사진"
      />
      {showTimeLimit && (
        <>
          <TimeLimit>
            <TimeIcon
              src="src/assets/food/icon_alarm.svg"
              alt="Time Icon"
            />
            {food?.이체해야하는시간}까지
          </TimeLimit>
        </>
      )}
      <StyledFoodCardText>
        <StyledRow>
          <GrayText>가게이름</GrayText> <BlackText>{food?.가게이름}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>참여 인원</GrayText> <BlackText>{food?.참여인원}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>배달비</GrayText> <BlackText>{food?.배달비}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>태그</GrayText> <BlackText>{food?.태그.join(', ')}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>이체 마감 시간</GrayText> <BlackText>{food?.이체해야하는시간}</BlackText>
        </StyledRow>
      </StyledFoodCardText>
    </StyledFoodCard>
  );
};

const DeliveryPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('함께배달');
  const [selectedCategory, setSelectedCategory] = useState('분식');
  const [data, setData] = useState<IFoodData | null>(null);

  useEffect(() => {
    const dummyResponse = foodData[selectedCategory];

    if (dummyResponse && dummyResponse.length > 0) {
      setData(dummyResponse[0]);
    } else {
      console.error(`No data found for category: ${selectedCategory}`);
    }
  }, [selectedCategory]);

  const Header: React.FC = () => {
    return (
      <StyledHeader>
        <StyledP isVisible={selectedMenu === '함께배달'}>
          같은 건물 사람들과 배달비 걱정 없이
        </StyledP>
        <StyledP isVisible={selectedMenu === '함께배달'}>맛있는 한 끼를 주문해보세요!</StyledP>
        <h3>{getHeaderText()}</h3>
      </StyledHeader>
    );
  };

  const getHeaderText = () => {
    switch (selectedMenu) {
      case '함께배달':
        return '함께 배달하기';
      case '내가 참여한 배달':
        return '내가 참여한 배달';
      case '나의 채팅':
        return '나의 채팅';
      default:
        return '';
    }
  };

  const handleMenuClick = menu => {
    setSelectedMenu(menu);
  };

  const handleCategoryClick = category => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Header />
      <TopMenu
        selectedMenu={selectedMenu}
        handleMenuClick={handleMenuClick}
      />
      <StyledDivider />
      <StyledContainer>
        <MenuContent
          selectedMenu={selectedMenu}
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
          data={data}
        />
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  position: relative;
`;

const StyledHeader = styled.div`
  background-image: none;
  width: 100%;
  padding: 204px 0 15px 25px;
  background-image: url('src/assets/food/IMG2345.svg');
  background-repeat: no-repeat;
  background-position: right bottom;
  background-color: ${props => props.theme.colors.marinblueColor};
  h3 {
    color: ${props => props.theme.colors.white};
    font-size: 25px;
    font-weight: 500;
    /* height: 34px; */
  }

  p {
    color: ${props => props.theme.colors.primaryPressedColor};
    font-size: 13px;
    padding: 0 0 5px 0;
    /* font-weight: 600; */
  }
`;

const StyledP = styled.p<{ isVisible: boolean }>`
  color: ${props => props.theme.colors.primaryPressedColor};
  font-size: 12px;
  margin-bottom: 5px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

const StyledMenu = styled.div`
  text-align: center;
`;

// 상단 탭 스타일
const TopMenuButton = styled.button`
  position: relative;
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;
  color: ${props => props.theme.colors.grayColor5};

  &.active {
    color: ${props => props.theme.colors.marinblueColor};

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 48px;
      height: 4px;
      background-color: ${props => props.theme.colors.marinblueColor};
      border-radius: 5px;
    }
  }
`;

// "함께 배달" 문구의 스타일 컴포넌트
const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  padding: 30px 0 10px 25px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

// "곧 마감이에요!" 문구의 스타일 컴포넌트
const SubHeading = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

// SVG 아이콘 컴포넌트
const Icon = styled.img`
  width: 20px;
  vertical-align: middle;
  margin-left: 10px;
`;

const StyledFoodCard = styled.div`
  padding: 10px;
  margin: 10px 5px;
  border-radius: 5px;
  font-size: 14px;
  width: 220px;
  max-width: 100%;
  cursor: pointer;
  h1 {
    color: ${props => props.theme.colors.grayColor10};
  }
  > img {
    width: 150px;
    height: 150px;
    border-radius: 15px;
    object-fit: cover;
  }
`;

const TimeLimit = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.redColor0};
  color: ${props => props.theme.colors.white};
  align-items: center;
  justify-content: center;
  width: 140px;
  font-size: 15px;
  font-weight: 700;
  margin: 5px;
  padding: 5px 10px;
  text-align: center;
  border-radius: 50px;
`;

const TimeIcon = styled.img`
  width: 16px;
  margin: 0 5px 0 0;
  vertical-align: middle;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0 0 0;
`;

const GrayText = styled.h1`
  width: 100px;
  text-align: left;
  padding-left: 5px;
  color: ${props => props.theme.colors.grayColor10};
  display: inline-block;
`;

const BlackText = styled.p`
  display: inline-block;
  padding-left: 10px;
`;

const StyledFoodCardText = styled.div`
  margin: 10px 0 0 0;
`;

const StyledFoodInfoListStyle = styled.div`
  /* margin: 5px 0 0 0; */
`;

const ListGrayText = styled.h1`
  width: 100px;
  text-align: left;
  padding-left: 5px;
  color: ${props => props.theme.colors.grayColor10};
  display: inline-block;
`;

const ListBlackText = styled.p`
  display: inline-block;
  padding-left: 15px;
`;

const StyledFoodCardListStyle = styled.div`
  padding: 10px;
  margin: 10px 5px;
  display: flex;
  align-items: start;
  gap: 10px;
  cursor: pointer;
  > img {
    flex-shrink: 0;
    width: 150px;
    height: 150px;
    border-radius: 15px;
    object-fit: cover;
    object-position: center; // Ensure the image is centered
  }

  > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const ScrollHidden = styled.div`
  /* 스크롤바 크기 설정 (크롬, Whale) */
  ::-webkit-scrollbar {
    height: 0;
    width: 0;
    background: transparent;
  }

  /* 스크롤바 썸네일 숨기기 (크롬, Whale) */
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  /* 스크롤바 숨기기 (Firefox) */
  scrollbar-width: none;

  /* 스크롤바 숨기기 (IE, Edge) */
  -ms-overflow-style: none;
`;

// 하단 탭 스타일
const MenuContainer = styled(ScrollHidden)`
  overflow-x: scroll;
  white-space: nowrap;
  padding-bottom: 20px;
`;

const CategoryButton = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  display: inline-block;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.marinblueColor};
  cursor: pointer;
  color: ${props => props.theme.colors.marinblueColor};
  border-radius: 8px;
  &:hover {
    background-color: ${props => props.theme.colors.marinblueColor};
    color: ${props => props.theme.colors.white};
  }
  &.active {
    background-color: ${props => props.theme.colors.marinblueColor};
    color: ${props => props.theme.colors.white};
  }
`;

const StyledDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.colors.grayColor1};
`;

// 함께 배달 마감
const FoodCardContainer = styled(ScrollHidden)`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  white-space: nowrap;
`;

const StyledChatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  cursor: pointer;

  img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  p {
    color: ${props => props.theme.colors.grayColor10};
  }
`;

export default DeliveryPage;
