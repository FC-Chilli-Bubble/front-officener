import React from 'react';
import { useRecoilState } from 'recoil';
import { dummyChatData } from '@/pages/Deliverypage/dummyData';
import TogetherDelivery from './TogetherDelivery';
import OrderList from './OrderList';
import FoodItem from './FoodItem';
import ChatItem from './ChatItem';
import { roomsAtom } from '@/states/rommsAtom';
import { IRoom } from '@/types/Delivery/IDeliveryList';
import styled from 'styled-components';

interface IMenuContentProps {
  selectedMenu: string;
  selectedCategory: string;
  handleCategoryClick: (_category: string) => void;
  data: IRoom[] | null;
}

const MenuContent: React.FC<IMenuContentProps> = ({
  selectedMenu,
  selectedCategory,
  handleCategoryClick,
  data
}) => {
  const [rooms] = useRecoilState(roomsAtom);

  if (!rooms) {
    return null;
  }
  const filteredRooms = rooms.filter(room => room.tag === selectedCategory);
  console.log(filteredRooms);
  console.log(selectedCategory, ', filteredRooms length:', filteredRooms.length);

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
              room={room} // 변경됨
              showTimeLimit={false}
              listStyle
            />
          ))
        ) : (
          <StyledNoData>
            <p>현재 선택된 카테고리에 대한 데이터가 없습니다.</p>
          </StyledNoData>
        )}
      </div>
    );
  } else if (selectedMenu === '내가 참여한 배달') {
    return (
      <div>
        {rooms &&
          rooms.map(room => (
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

const StyledNoData = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
`;

export default MenuContent;
