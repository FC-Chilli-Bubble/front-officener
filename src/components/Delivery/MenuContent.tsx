import React from 'react';
import { dummyChatData } from '@/pages/Deliverypage/dummyData';
import TogetherDelivery from './TogetherDelivery';
import OrderList from './OrderList';
import FoodItem from './FoodItem';
import ChatItem from './ChatItem';
import { IFoodData } from '@/pages/Deliverypage/dummyData';
import { IRoom } from '@/types/Delivery/IDeliveryList';

interface IMenuContentProps {
  rooms: IRoom[] | null;
  selectedMenu: string;
  selectedCategory: string;
  handleCategoryClick: (_category: string) => void;
  data: IFoodData | null;
}

const MenuContent: React.FC<IMenuContentProps> = ({
  rooms,
  selectedMenu,
  selectedCategory,
  handleCategoryClick,
  data
}) => {
  if (!rooms) {
    return null;
  }
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

        {rooms &&
          rooms.map(room => (
            <FoodItem
              key={room.roomId}
              room={room} // 변경됨
            />
          ))}

        {/* {data && (
          <FoodItem
            food={data}
            showTimeLimit={false}
            listStyle
          />
        )}

        {data && (
          <FoodItem
            food={data}
            showTimeLimit={false}
            listStyle
          />
        )}

        {data && (
          <FoodItem
            food={data}
            showTimeLimit={false}
            listStyle
          />
        )} */}
      </div>
    );
  } else if (selectedMenu === '내가 참여한 배달') {
    return (
      <div>
        {/* {data && (
          <FoodItem
            food={data}
            showTimeLimit={false}
            listStyle
          />
        )} */}
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

export default MenuContent;
