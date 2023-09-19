import React, { useMemo } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import IconDelivery from '@/assets/ico_delivery_off.svg';
import { TDummyNotification } from '@/pages/Notification/DummyNotifications';

type TNotificationItemProps = {
  // TODO : 추후 알림 인터페이스 수정 필요
  notification: TDummyNotification;
  onClick: () => void;
};

const NotificationItem = React.memo((
  { notification, onClick }: TNotificationItemProps
) => {
  const { type, message, date } = notification;

  const parseDate = useMemo(() => {
    const now = dayjs();
    const diffMinues = now.diff(dayjs(date), 'minute');
    const diffHoures = now.diff(dayjs(date), 'hour');
    const diffDays = now.diff(dayjs(date), 'day');
    if (diffMinues < 60) {
      return `${diffMinues}분 전`;
    } else if (diffHoures < 24) {
      return `${diffHoures}시간 전`;
    } else if (diffDays < 7) {
      return `${diffDays}일 전`;
    } else {
      return dayjs(date).format('YYYY년 MM월 DD일');
    }
  }, [date]);

  return (
    <StyledContainer onClick={onClick}>
      <img src={IconDelivery} alt='음식태그' />
      <StyledBox>
        <p>{type}</p>
        <h5>{message}</h5>
        <span>{parseDate}</span>
      </StyledBox>
    </StyledContainer>
  );
});

const StyledContainer = styled.div`
  display: flex;
  gap: 14px;
  align-items: start;
  padding: 10px 0px;
  cursor: pointer;

  img {
    width: 46px;
    height: 46px;
    border-radius: 8px;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.grayColor1};
  }
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    color: ${({ theme }) => theme.colors.grayColor9};
    font-size: 10px;
    line-height: 15px;
  }

  h5 {
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.grayColor9};
  }

  span {
    color: ${({ theme }) => theme.colors.grayColor5};
    font-size: 10px;
    line-height: 15px;
  }
`;

export default NotificationItem;