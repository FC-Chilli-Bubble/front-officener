import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { IDeliveryPost } from '@/types/Delivery/IDeliveryPost';
import { FOODTAGS } from '@/constants/commonUiData';
import Sample from '@/assets/food/Rectangle 477-1.svg'; // 추후 삭제 필요

type TStoreInfoProps = {
  detail: IDeliveryPost;
};

const StoreInfo = React.memo(({ detail }: TStoreInfoProps) => {
  return (
    <StyledFoodCardListStyle>
      <img
        src={Sample}
        alt="음식 사진"
      />
      <div>
        <StyledRow>
          <GrayText>가게이름</GrayText> <BlackText>{detail.storeName}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>참여인원</GrayText> <BlackText>{`${detail.attendees}/${detail.maxAttendees}`}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>배달비</GrayText> <BlackText>{detail.deliveryFee.toLocaleString()}원</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>태그</GrayText> <BlackText>#{Object.keys(FOODTAGS).find(key => FOODTAGS[key] === detail.tag)}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>이체마감</GrayText> <BlackText>{dayjs(detail.deadline).format('A hh:mm')}</BlackText>
        </StyledRow>
      </div>
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

export default StoreInfo;
