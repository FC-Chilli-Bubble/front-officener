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

const FoodItem: React.FC<{ food: IFoodData; }> = ({ food }) => {
  return (
    <StyledFoodCardListStyle>
      <img
        src={food?.사진}
        alt="음식 사진"
      />
      <div>
        <StyledRow>
          <GrayText>가게이름</GrayText> <BlackText>{food?.가게이름}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>참여 인원</GrayText> <BlackText>{food?.참여인원}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>배달비</GrayText> <BlackText>{food?.배달비}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>태그</GrayText> <BlackText>{food?.태그.join(', ')}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>이체 마감 시간</GrayText> <BlackText>{food?.이체해야하는시간}</BlackText>
        </StyledRow>
      </div>
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

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0 0 0;
`;

const GrayText = styled.h1`
  width: 100px;
  text-align: left;
  color: ${props => props.theme.colors.grayColor10};
  display: inline-block;
`;

const BlackText = styled.p`
  color: black;
  display: inline-block;
  padding-left: 10px;
`;

export default FoodItem;
