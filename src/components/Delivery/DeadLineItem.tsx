import React from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import styled from 'styled-components';

import { IRoom } from '@/types/Delivery/IDeliveryList';
import { FOODTAGS, FOOD_IMAGE } from '@/constants/commonUiData';
import IconAlarm from '@/assets/food/icon_alarm.svg';

const DeadLineItem = React.memo(({ room }: { room: IRoom; }) => {
  const navigate = useNavigate();

  const handleMovePost = () => {
    navigate(`/delivery/${room.roomId}`);
  };

  return (
    <StyledFoodCard onClick={handleMovePost}>
      <img
        src={FOOD_IMAGE[room.tag]}
        alt="음식사진"
      />
      <TimeLimit diffMin={dayjs(room.deadLine).diff(dayjs(), 'minutes')}>
        <TimeIcon
          src={IconAlarm}
          alt="Time Icon"
        />
        {dayjs(room.deadLine).format('A hh:mm')}까지
      </TimeLimit>

      <StyledFoodCardText>
        <StyledRow>
          <GrayText>가게이름</GrayText> <BlackText>{room.storeName}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>참여인원</GrayText>{' '}
          <BlackText>{`${room.attendees}/${room.maxAttendees}`}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>배달비</GrayText> <BlackText>{room.deliveryFee.toLocaleString()}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>태그</GrayText> <BlackText>{Object.keys(FOODTAGS).find(key => FOODTAGS[key] === room.tag)}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>이체마감</GrayText>{' '}
          <BlackText>{dayjs(room.deadLine).format('A hh:mm')}</BlackText>
        </StyledRow>
      </StyledFoodCardText>
    </StyledFoodCard>
  );
});


const TimeLimit = styled.div<{ diffMin: number; }>`
  display: flex;
  background-color: ${props => props.diffMin <= 10 ? props.theme.colors.redColor0 : props.theme.colors.grayColor90};
  color: ${props => props.theme.colors.white};
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  margin: 13px 5px;
  padding: 5px 25px;
  text-align: center;
  border-radius: 50px;
`;

const TimeIcon = styled.img`
  width: 16px;
  margin: 0 5px 0 0;
  padding: 2px 0 2px 0;
  vertical-align: middle;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 8px 0;
  justify-content: flex-start;
`;

const GrayText = styled.h1`
  flex-shrink: 0;
  width: 35%;
  text-align: left;
  padding-left: 5px;
  color: ${props => props.theme.colors.grayColor10};
  display: inline-block;
`;

const BlackText = styled.p`
  flex-grow: 1;
  padding-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledFoodCard = styled.div`
  padding: 10px;
  margin: 10px 5px;
  border-radius: 5px;
  font-size: 14px;
  width: 220px;
  max-width: 100%;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${props => props.theme.colors.grayColor10};
  }
  > img {
    width: 180px;
    height: 170px;
    border-radius: 15px;
    object-fit: cover;
  }
`;

const StyledFoodCardText = styled.div`
  padding: 0;
  width: 180px;
`;

export default DeadLineItem;