import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import FoodItem from './FoodItem';
import { roomsAtom } from '@/states/rommsAtom';
import IconTime from '@/assets/food/Time.svg';
import dayjs from 'dayjs';
import { IRoom } from '@/types/Delivery/IDeliveryList';

interface ITogetherDeliveryProps {
  selectedCategory: string;
}

const TogetherDelivery: React.FC<ITogetherDeliveryProps> = ({ selectedCategory }) => {
  const [filteredData, setFilteredData] = useState<IRoom[]>([]);
  const [rooms] = useRecoilState(roomsAtom);

  // deadline 필터링
  useEffect(() => {
    const now = dayjs();
    console.log('Now:', now.toString());
    const filtered = rooms.filter(item => {
      const deadline = dayjs(item.deadLine);
      console.log('Deadline:', deadline.toString());
      const diff = now.diff(deadline, 'hour');
      return diff < 50 && diff >= 0;
    });
    console.log('Filtered:', filtered);
    setFilteredData(filtered);
  }, [rooms]);

  // deadline, category 필터링
  // useEffect(() => {
  //   const now = dayjs();
  //   const filtered = rooms.filter(item => {
  //     const deadline = dayjs(item.deadLine);
  //     const diff = now.diff(deadline, 'hour');
  //     return item.tag === selectedCategory && diff < 60 && diff >= 0;
  //   });
  //   setFilteredData(filtered);
  // }, [rooms, selectedCategory]);

  if (filteredData.length === 0) {
    return <StyledNoData>현재 데이터가 없습니다.</StyledNoData>;
  }

  return (
    <>
      <Heading>
        함께 배달 <br />
        <SubHeadingContainer>
          <SubHeading>곧 마감이에요!</SubHeading>
          <Icon
            src={IconTime}
            alt="Icon Description"
          />
        </SubHeadingContainer>
      </Heading>
      <FoodCardContainer>
        {filteredData &&
          filteredData.map(room => (
            <FoodItem
              key={room.roomId}
              room={room}
            />
          ))}
      </FoodCardContainer>
    </>
  );
};

// "함께 배달" 문구의 스타일 컴포넌트
const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  padding: 30px 0 10px 25px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

// "곧 마감이에요!" 문구의 스타일 컴포넌트
const SubHeading = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

// SVG 아이콘 컴포넌트
const Icon = styled.img`
  width: 20px;
  vertical-align: middle;
  margin-left: 10px;
`;

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

// 함께 배달 마감
const FoodCardContainer = styled(ScrollHidden)`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledNoData = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
`;

export default TogetherDelivery;
