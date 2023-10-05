import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { roomsAtom } from '@/states/rommsAtom';
import IconTime from '@/assets/food/Time.svg';
import DeadLineItem from '@/components/Delivery/DeadLineItem';


const TogetherDelivery = () => {
  const rooms = useRecoilValue(roomsAtom);

  const filteredData = useMemo(() => {
    return rooms.filter(item => {
      const deadline = dayjs(item.deadLine);
      const diff = deadline.diff(dayjs(), 'minutes');
      return diff <= 20 && diff > 0;
    })
      .sort((a, b) => dayjs(a.deadLine).diff(dayjs(b.deadLine)));
  }, [rooms]);

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
      {filteredData.length === 0 ? (
        <StyledNoData>곧 마감하는 배달이 없습니다</StyledNoData>
      ) : (
        <FoodCardContainer>
          {filteredData.map(room => (
            <DeadLineItem
              key={room.roomId}
              room={room}
            />
          ))}
        </FoodCardContainer>
      )}
    </>
  );
};

// "함께 배달" 문구의 스타일 컴포넌트
const Heading = styled.h2`
  font-size: 24px;
  font-weight: 600;
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

  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

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

export default TogetherDelivery;
