import React from 'react';
import styled from 'styled-components';
import { FOODTAGS, FOOD_TAG } from '@/constants/commonUiData';

interface IOrderListProps {
  selectedCategory: string;
  handleCategoryClick: (_category: string) => void;
}

const OrderList: React.FC<IOrderListProps> = ({ selectedCategory, handleCategoryClick }) => {
  return (
    <>
      <Heading>함께 주문 리스트</Heading>
      <MenuContainer>
        {FOOD_TAG.map(category => (
          <CategoryButton
            key={category}
            className={selectedCategory === FOODTAGS[category] ? 'active' : ''}
            onClick={() => handleCategoryClick(FOODTAGS[category])}>
            {category}
          </CategoryButton>
        ))}
      </MenuContainer>
    </>
  );
};

const ScrollHidden = styled.div`
  /* 스크롤바 크기 설정 (크롬, Whale) */
  ::-webkit-scrollbar {
    height: 0;
    width: 0;
    background: transparent;
  }

  /* 스크롤바 썸네일 숨기기 (크롬, Whale) */
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  /* 스크롤바 숨기기 (Firefox) */
  scrollbar-width: none;

  /* 스크롤바 숨기기 (IE, Edge) */
  -ms-overflow-style: none;
`;

// "함께 배달" 문구의 스타일 컴포넌트
const Heading = styled.h2`
  font-size: 24px;
  font-weight: 600;
  padding: 20px 0 16px 24px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// 하단 탭 스타일
const MenuContainer = styled(ScrollHidden)`
  overflow-x: scroll;
  white-space: nowrap;
  padding-bottom: 10px;
  padding-left: 20px;

  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

const CategoryButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  margin: 0 10px 0 0;
  border: none;
  display: inline-block;
  width: 97px;
  height: 48px;
  flex-shrink: 0;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.marinblueColor};
  cursor: pointer;
  color: ${props => props.theme.colors.marinblueColor};
  border-radius: 8px;
  &:hover {
    background-color: ${props => props.theme.colors.marinblueColor};
    color: ${props => props.theme.colors.white};
  }
  &.active {
    background-color: ${props => props.theme.colors.marinblueColor};
    color: ${props => props.theme.colors.white};
  }
`;

export default OrderList;
