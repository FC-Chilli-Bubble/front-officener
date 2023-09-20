import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { foodData, IFoodData } from './dummyData';
import MenuContent from '@/components/Delivery/MenuContent';
import TopMenu from '@/components/Delivery/TopMenu';
import Header from '@/components/Delivery/Header';

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

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Header selectedMenu={selectedMenu} />
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

const StyledDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.colors.grayColor1};
`;

export default DeliveryPage;
