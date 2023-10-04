import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import MenuContent from '@/components/Delivery/MenuContent';
import TopMenu from '@/components/Delivery/TopMenu';
import Header from '@/components/Delivery/Header';
import AddButton from '@/assets/food/postbutton.svg';
import { deliverylist } from '@/apis/Delivery/deliverylist';
import { getJoinedRooms } from '@/apis/Delivery/getJoinedRooms';
import { roomsAtom } from '@/states/rommsAtom';
import { IRoom } from '@/types/Delivery/IDeliveryList';
import { FOODTAGS, FOOD_TAG } from '@/constants/commonUiData';
import dayjs from 'dayjs';

const DeliveryPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('함께배달');
  const [selectedCategory, setSelectedCategory] = useState(FOODTAGS[FOOD_TAG[0]]);
  const [rooms, setRooms] = useRecoilState(roomsAtom);
  const [joinedRooms, setJoinedRooms] = useState<IRoom[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await deliverylist();
        setRooms(response.data.rooms.filter(room => dayjs().isBefore(dayjs(room.deadLine)), 'day'));
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const joinedRoomsResponse = await getJoinedRooms();
        setJoinedRooms(joinedRoomsResponse.data.rooms);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
  }, []);


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
          rooms={rooms}
          selectedMenu={selectedMenu}
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
          joinedRooms={joinedRooms}
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

const PostButton = styled.button<{ img: string; }>`
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
