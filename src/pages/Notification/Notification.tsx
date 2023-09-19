import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import dayjs from 'dayjs';

import Header from '@/components/Common/Header';
import DummyNotifications from './DummyNotifications';
import NotificationItem from '@/components/Notification/NotificationItem';


const Notification = () => {
  const navigate = useNavigate();
  const newNotifications = DummyNotifications.filter(noti => !noti.read).sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));
  const lastNotifications = DummyNotifications.filter(noti => noti.read).sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));

  const handleClickBack = () => {
    navigate(-1);
  };

  const handleClickNotification = () => {
    // TODO : 개별 읽음 처리
  };

  const handleClickReadAll = () => {
    // TODO : 모두 읽음 처리
  };

  return (
    <>
      <Header leftIcon='back' leftIconClick={handleClickBack} title='알림' />
      <StyledContainer>
        <div>
          <StyledNewTitle>
            <h2>새로운 알림</h2>
            <button onClick={handleClickReadAll}>모두 읽음</button>
          </StyledNewTitle>
          {
            newNotifications.length > 0
              ? (
                <ul>
                  {
                    newNotifications.map(notification =>
                      <NotificationItem key={notification.date} notification={notification} onClick={handleClickNotification} />)
                  }
                </ul>
              )
              : <StyledEmptyMessage>새로운 알림이 없습니다.</StyledEmptyMessage>
          }
        </div>
        <div>
          <h2>지난 알림</h2>
          {
            lastNotifications.length > 0
              ? (
                <ul>
                  {
                    lastNotifications.map(notification => <NotificationItem notification={notification} onClick={handleClickBack} />)
                  }
                </ul>
              )
              : <StyledEmptyMessage>알림이 없습니다.</StyledEmptyMessage>
          }
        </div>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h2 {
    font-size: 16px;
  }
`;

const StyledNewTitle = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 5px 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.grayColor1};
    color: ${({ theme }) => theme.colors.grayColor5};
    border: none;
  }
`;

const StyledEmptyMessage = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin-top: 8px;
`;

export default Notification;