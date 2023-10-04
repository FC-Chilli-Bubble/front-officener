import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import styled from 'styled-components';

import { IRoom } from '@/types/Delivery/IDeliveryList';
import { FOODTAGS, FOOD_IMAGE } from '@/constants/commonUiData';

interface IFoodItemProps {
  room: IRoom;
}

const FoodItem = ({ room }: IFoodItemProps) => {
  const navigate = useNavigate();

  const handleMovePost = () => {
    // if (dayjs(room.deadLine).isBefore(dayjs())) {
    //   return;
    // }
    navigate(`/delivery/${room.roomId}`);
  };

  return (
    <StyledFoodCardListStyle onClick={handleMovePost}>
      {
        dayjs(room.deadLine).isBefore(dayjs())
          ? <StyledEndBox >마감</StyledEndBox>
          : (<img
            src={FOOD_IMAGE[room.tag]}
            alt="음식사진"
          />)
      }

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
          <ListGrayText>태그</ListGrayText> <ListBlackText>{Object.keys(FOODTAGS).find(key => FOODTAGS[key] === room.tag)}</ListBlackText>
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

`;

const StyledEndBox = styled.div`
    flex-shrink: 0;
    width: 150px;
    height: 150px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.primaryDisabledColor};
    color: #2563EB66;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledFoodInfoListStyle = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
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

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 8px 0;
  justify-content: flex-start;
`;


export default FoodItem;
