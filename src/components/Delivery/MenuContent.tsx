import React, { useState, useEffect, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { roomsAtom } from '@/states/rommsAtom';
import { IRoom } from '@/types/Delivery/IDeliveryList';
import TogetherDelivery from './TogetherDelivery';
import OrderList from '@/components/Delivery/OrderList';
import FoodItem from '@/components/Delivery/FoodItem';
import ChatItem from '@/components/Delivery/ChatItem';
import { FOOD_IMAGE } from '@/constants/commonUiData';
import { IChat } from '@/types/Delivery/IDeliveryChat';
import { getChats } from '@/apis/Delivery/deliveryChat';
// import { dummyChatData } from '@/pages/Deliverypage/dummyData';

interface IMenuContentProps {
  rooms: IRoom[];
  selectedMenu: string;
  selectedCategory: string;
  handleCategoryClick: (_category: string) => void;
  joinedRooms: IRoom[] | null;
}

const MenuContent = ({
  selectedMenu,
  selectedCategory,
  handleCategoryClick,
  joinedRooms
}: IMenuContentProps) => {
  const [rooms] = useRecoilState(roomsAtom);
  const [chats, setChats] = useState<IChat[] | null>(null);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const chatResponse = await getChats();
        setChats(chatResponse.data.chats);
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };

    fetchChats();
  }, []);

  const filteredRooms = useMemo(() => rooms.filter(room => room.tag === selectedCategory), [rooms, selectedCategory]);

  if (selectedMenu === '함께배달') {
    return (
      <div>
        {/* 마감 리스트 */}
        <TogetherDelivery />
        {/* 카테고리 버튼 */}
        <OrderList
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
        />
        {/* 카테고리별 리스트 */}
        {filteredRooms.length > 0 ? (
          filteredRooms.map(room => (
            <FoodItem
              key={room.roomId}
              room={room}
            />
          ))
        ) : (
          <StyledNoData>
            함께 주문 리스트가 비었습니다.
          </StyledNoData>
        )}
      </div>
    );
  } else if (selectedMenu === '내가 참여한 배달') {
    return (
      <div>
        {joinedRooms &&
          joinedRooms.map(room => (
            <FoodItem
              key={room.roomId}
              room={room}
            />
          ))}
      </div>
    );
  } else if (selectedMenu === '나의 채팅') {
    return (
      <div>
        {chats &&
          chats.map(chat => (
            <ChatItem
              key={chat.chatRoomId}
              profileImage={FOOD_IMAGE[chat.foodTag]}
              name={chat.storeName}
              message={chat.recentMessage}
            />
          ))}
      </div>
    );
  }
  return null;
};

const StyledNoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  border-radius: 10px;
  border: 1px dashed ${props => props.theme.colors.grayColor3};
  color: ${props => props.theme.colors.grayColor5};
  height: 405px;
  margin: 20px 24px;
`;

export default MenuContent;
