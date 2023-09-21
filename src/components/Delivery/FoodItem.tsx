import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import IconAlarm from '@/assets/food/icon_alarm.svg';
interface IFoodData {
  사진?: string;
  가게이름: string;
  참여인원: number;
  배달비: string;
  태그: string[];
  이체해야하는시간: string;
}

interface IFoodItemProps {
  food: IFoodData;
  showTimeLimit?: boolean;
  listStyle?: boolean;
}

const FoodItem: React.FC<IFoodItemProps> = ({ food, showTimeLimit = true, listStyle = false }) => {
  const navigate = useNavigate();

  const handleMoveDetail = () => {
    navigate('/delivery/details');
  };

  // TEST용
  const handleMovePost = () => {
    navigate('/delivery/post');
  };

  if (listStyle) {
    return (
      <StyledFoodCardListStyle onClick={handleMoveDetail}>
        <img
          src={food?.사진}
          alt="음식 사진"
        />
        <StyledFoodInfoListStyle>
          <StyledRow>
            <ListGrayText>가게이름</ListGrayText> <ListBlackText>{food?.가게이름}</ListBlackText>
          </StyledRow>
          <StyledRow>
            <ListGrayText>참여인원</ListGrayText> <ListBlackText>{food?.참여인원}</ListBlackText>
          </StyledRow>
          <StyledRow>
            <ListGrayText>배달비</ListGrayText> <ListBlackText>{food?.배달비}</ListBlackText>
          </StyledRow>
          <StyledRow>
            <ListGrayText>태그</ListGrayText> <ListBlackText>{food?.태그.join(', ')}</ListBlackText>
          </StyledRow>
          <StyledRow>
            <ListGrayText>이체마감</ListGrayText>{' '}
            <ListBlackText>{food?.이체해야하는시간}</ListBlackText>
          </StyledRow>
        </StyledFoodInfoListStyle>
      </StyledFoodCardListStyle>
    );
  }

  return (
    <StyledFoodCard onClick={handleMovePost}>
      <img
        src={food?.사진}
        alt="음식 사진"
      />
      {showTimeLimit && (
        <>
          <TimeLimit>
            <TimeIcon
              src={IconAlarm}
              alt="Time Icon"
            />
            {food?.이체해야하는시간}까지
          </TimeLimit>
        </>
      )}
      <StyledFoodCardText>
        <StyledRow>
          <GrayText>가게이름</GrayText> <BlackText>{food?.가게이름}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>참여인원</GrayText> <BlackText>{food?.참여인원}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>배달비</GrayText> <BlackText>{food?.배달비}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>태그</GrayText> <BlackText>{food?.태그.join(', ')}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>이체마감</GrayText> <BlackText>{food?.이체해야하는시간}</BlackText>
        </StyledRow>
      </StyledFoodCardText>
    </StyledFoodCard>
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
    object-position: center; // Ensure the image is centered
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
  width: 100px;
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
`;

const TimeLimit = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.redColor0};
  color: ${props => props.theme.colors.white};
  align-items: center;
  justify-content: center;
  width: 140px;
  font-size: 15px;
  font-weight: 700;
  margin: 13px 5px;
  padding: 5px 10px;
  text-align: center;
  border-radius: 50px;
`;

const TimeIcon = styled.img`
  width: 16px;
  margin: 0 5px 0 0;
  vertical-align: middle;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 8px 0;
`;

const GrayText = styled.h1`
  width: 100px;
  text-align: left;
  padding-left: 5px;
  color: ${props => props.theme.colors.grayColor10};
  display: inline-block;
`;

const BlackText = styled.p`
  display: inline-block;
  padding-left: 10px;
`;

const StyledFoodCard = styled.div`
  padding: 10px;
  margin: 10px 5px;
  border-radius: 5px;
  font-size: 14px;
  width: 220px;
  max-width: 100%;
  cursor: pointer;
  h1 {
    color: ${props => props.theme.colors.grayColor10};
  }
  > img {
    width: 150px;
    height: 150px;
    border-radius: 15px;
    object-fit: cover;
  }
`;

const StyledFoodCardText = styled.div`
  padding: 0;
`;

export default FoodItem;
