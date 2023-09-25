import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { foodData, IFoodData } from './dummyData';
import MenuContent from '@/components/Delivery/MenuContent';
import TopMenu from '@/components/Delivery/TopMenu';
import Header from '@/components/Delivery/Header';
import AddButton from '@/assets/food/postbutton.svg';

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
        <StyledButtonBox>
          <PostButton
            img={AddButton}
            onClick={handleButtonClick}
          />
        </StyledButtonBox>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  position: relative;
`;

const StyledButtonBox = styled.div`
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  max-width: 560px;
  bottom: 126px;
  display: flex;
  justify-content: end;
  padding-right: 26px;
`;

const PostButton = styled.button<{ img: string }>`
  position: sticky;
  width: 48px;
  height: 48px;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  z-index: 999;
`;

export default DeliveryPage;
