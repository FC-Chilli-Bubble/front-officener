import React, { useState, useEffect } from 'react';
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
  data: IRoom[] | null;
  joinedRooms: IRoom[] | null;
}

const MenuContent: React.FC<IMenuContentProps> = ({
  selectedMenu,
  selectedCategory,
  handleCategoryClick,
  data,
  joinedRooms
}) => {
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
  if (!rooms) {
    return null;
  }
  const filteredRooms = rooms.filter(room => room.tag === selectedCategory);

  if (selectedMenu === '함께배달') {
    return (
      <div>
        <TogetherDelivery selectedCategory={selectedCategory} />
        {data && (
          <OrderList
            data={data}
            selectedCategory={selectedCategory}
            handleCategoryClick={handleCategoryClick}
          />
        )}

        {filteredRooms.length > 0 ? (
          filteredRooms.map(room => (
            <FoodItem
              key={room.roomId}
              room={room}
              showTimeLimit={false}
              listStyle
            />
          ))
        ) : (
          <StyledNoData>
            <p>함께 주문 리스트가 비었습니다.</p>
          </StyledNoData>
        )}
      </div>
    );
  } else if (selectedMenu === '내가 참여한 배달') {
    // return (
    //   <div>
    //     {rooms &&
    //       rooms.map(room => (
    //         <FoodItem
    //           key={room.roomId}
    //           room={room}
    //           showTimeLimit={false}
    //           listStyle
    //         />
    //       ))}
    //   </div>
    // );
    return (
      <div>
        {joinedRooms &&
          joinedRooms.map(room => (
            <FoodItem
              key={room.roomId}
              room={room}
              showTimeLimit={false}
              listStyle
            />
          ))}
      </div>
    );
  } else if (selectedMenu === '나의 채팅') {
    // return (
    //   <div>
    //     {dummyChatData.map(chat => (
    //       <ChatItem
    //         key={chat.name}
    //         profileImage={chat.profileImage}
    //         name={chat.name}
    //         message={chat.message}
    //       />
    //     ))}
    //   </div>
    // );
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
  width: 330px;
  height: 405px;
  flex-shrink: 0;
  margin: 20px auto auto auto;
`;

export default MenuContent;
