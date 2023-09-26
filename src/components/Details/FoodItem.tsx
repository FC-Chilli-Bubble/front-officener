import React from 'react';
import styled from 'styled-components';

interface IFoodData {
  사진?: string;
  가게이름: string;
  참여인원: number;
  배달비: string;
  태그: string[];
  이체해야하는시간: string;
}

const FoodItem: React.FC<{ food: IFoodData }> = ({ food }) => {
  return (
    <StyledFoodCardListStyle>
      <img
        src={food?.사진}
        alt="음식 사진"
      />
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
    </StyledFoodCardListStyle>
  );
};

const StyledFoodCardListStyle = styled.div`
  padding: 16px;
  display: flex;
  align-items: start;
  gap: 16px;

  > img {
    flex-shrink: 0;
    width: 150px;
    height: 150px;
    border-radius: 15px;
    object-fit: cover;
  }

  > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const StyledFoodCardText = styled.div`
  padding: 5px 0 0 0;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 8px 0;
  justify-content: flex-start;
  width: 180px;
`;

const GrayText = styled.h1`
  flex-shrink: 0;
  width: 80px;
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

export default FoodItem;
