import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import styled from 'styled-components';

import { IRoom } from '@/types/Delivery/IDeliveryList';
import { FOOD_IMAGE } from '@/constants/commonUiData';
import IconAlarm from '@/assets/food/icon_alarm.svg';

interface IFoodItemProps {
  room: IRoom;
}

const FoodItem = ({ room }: IFoodItemProps) => {
  const navigate = useNavigate();

  const handleMovePost = () => {
    navigate(`/delivery/${room.roomId}`);
  };

  return (
    <StyledFoodCardListStyle onClick={handleMovePost}>
      <img
        src={FOOD_IMAGE[room.tag]}
        alt="음식사진"
      />
      <StyledFoodInfoListStyle>
        <StyledRow>
          <ListGrayText>가게이름</ListGrayText> <ListBlackText>{room.storeName}</ListBlackText>
        </StyledRow>
        <StyledRow>
          <ListGrayText>참여인원</ListGrayText>{' '}
          <ListBlackText>{`${room.attendees}/${room.maxAttendees}`}</ListBlackText>
        </StyledRow>
        <StyledRow>
          <ListGrayText>배달비</ListGrayText> <ListBlackText>{room.deliveryFee}</ListBlackText>
        </StyledRow>
        <StyledRow>
          <ListGrayText>태그</ListGrayText> <ListBlackText>{room.tag}</ListBlackText>
        </StyledRow>
        <StyledRow>
          <ListGrayText>이체마감</ListGrayText>{' '}
          <ListBlackText>{dayjs(room.deadLine).format('A hh:mm')}</ListBlackText>
        </StyledRow>
      </StyledFoodInfoListStyle>
    </StyledFoodCardListStyle>
  );
};

const StyledFoodCardListStyle = styled.div`
  padding: 10px;
  margin: 5px 5px;
  display: flex;
  align-items: start;
  gap: 20px;
  cursor: pointer;
  > img {
    flex-shrink: 0;
    width: 150px;
    height: 150px;
    border-radius: 15px;
    object-fit: cover;
    object-position: center;
  }

  > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const StyledFoodInfoListStyle = styled.div`
  margin: 10px 0 0 0;
`;

const ListGrayText = styled.h1`
  flex-shrink: 0;
  width: 70px;
  text-align: left;
  padding-left: 5px;
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.colors.grayColor10};
  display: inline-block;
`;

const ListBlackText = styled.p`
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  flex-grow: 1;
  padding-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100px;
`;

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
  width: 100px;
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
  max-width: 180px;
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

export default FoodItem;
