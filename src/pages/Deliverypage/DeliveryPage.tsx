import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { foodData, IFoodData } from './dummyData';
import MenuContent from '@/components/Delivery/MenuContent';
import TopMenu from '@/components/Delivery/TopMenu';
import Header from '@/components/Delivery/Header';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/delivery/post');
  };

  return (
    <>
      <Header selectedMenu={selectedMenu} />
      <TopMenu
        selectedMenu={selectedMenu}
        handleMenuClick={handleMenuClick}
      />
      <StyledContainer>
        <MenuContent
          selectedMenu={selectedMenu}
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
          data={data}
        />
        <PostButton onClick={handleButtonClick} />
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  position: relative;
`;

const PostButton = styled.button`
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-image: url('src/assets/food/postbutton.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export default DeliveryPage;
