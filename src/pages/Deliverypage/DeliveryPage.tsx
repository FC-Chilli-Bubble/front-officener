import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { foodData } from './dummyData';
import MenuContent from '@/components/Delivery/MenuContent';
import TopMenu from '@/components/Delivery/TopMenu';

interface IFoodData {
  사진?: string;
  가게이름: string;
  참여인원: number;
  배달비: string;
  태그: string[];
  이체해야하는시간: string;
}

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
  }

  p {
    color: ${props => props.theme.colors.primaryPressedColor};
    font-size: 13px;
    padding: 0 0 5px 0;
  }
`;

const StyledP = styled.p<{ isVisible: boolean }>`
  color: ${props => props.theme.colors.primaryPressedColor};
  font-size: 12px;
  margin-bottom: 5px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

const StyledDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.colors.grayColor1};
`;

export default DeliveryPage;
