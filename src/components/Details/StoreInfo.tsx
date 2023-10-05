import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { IDeliveryPost } from '@/types/Delivery/IDeliveryPost';
import { FOODTAGS, FOOD_IMAGE } from '@/constants/commonUiData';

type TStoreInfoProps = {
  detail: IDeliveryPost;
};

const StoreInfo = React.memo(({ detail }: TStoreInfoProps) => {
  return (
    <StyledFoodCardListStyle>
      <img
        src={FOOD_IMAGE[detail.tag]}
        alt="음식 사진"
      />
      <StyledFoodCardText>
        <StyledRow>
          <GrayText>가게이름</GrayText> <BlackText>{detail.storeName}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>참여인원</GrayText>{' '}
          <BlackText>{`${detail.attendees}/${detail.maxAttendees}`}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>배달비</GrayText> <BlackText>{detail.deliveryFee.toLocaleString()}원</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>태그</GrayText>{' '}
          <BlackText>#{Object.keys(FOODTAGS).find(key => FOODTAGS[key] === detail.tag)}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>이체마감</GrayText>{' '}
          <BlackText>{dayjs(detail.deadline).format('A hh:mm')}</BlackText>
        </StyledRow>
      </StyledFoodCardText>
    </StyledFoodCardListStyle>
  );
});

const StyledFoodCardListStyle = styled.div`
  padding: 16px;
  display: flex;
  align-items: start;
  gap: 26px;

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

export default StoreInfo;
