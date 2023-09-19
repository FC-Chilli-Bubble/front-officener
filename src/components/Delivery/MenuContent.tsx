import React from 'react';
import { dummyChatData } from '@/pages/Deliverypage/dummyData';
import TogetherDelivery from './TogetherDelivery';
import OrderList from './OrderList';
import FoodItem from './FoodItem';
import ChatItem from './ChatItem';

interface IMenuContentProps {
  selectedMenu: string;
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
  data: any;
}

const MenuContent: React.FC<IMenuContentProps> = ({
  selectedMenu,
  selectedCategory,
  handleCategoryClick,
  data
}) => {
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

export default MenuContent;
