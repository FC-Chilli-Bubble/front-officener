import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@/components/Common/Header';
import NotificationItem from '@/components/Notification/NotificationItem';
import { fetchAllNotifications, updateNotificationReadAll, updateNotificationReadStatus } from '@/apis/Notify/notifyRequests';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filterdNotificationsState, notificationsAtom } from '@/states/notificationsAtom';
import { useModal } from '@/hooks/useModal';
import MODAL_DATAS from '@/constants/modalDatas';


const Notification = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useRecoilState(notificationsAtom);
  const { newNotifications, lastNotifications } = useRecoilValue(filterdNotificationsState);
  const { openModal } = useModal();

  const getAllNotifications = async () => {
    try {
      const res = await fetchAllNotifications();
      setNotifications(res.data);
    } catch (error) {
      openModal(MODAL_DATAS.NOTIFICATIONS_FETCH_FAILURE);
    }
  };

  useEffect(() => {
    getAllNotifications();
  }, []);

  const handleClickBack = () => {
    navigate(-1);
  };

  const handleClickNotification = async (notifyId: number, roomId: number) => {
    try {
      const res = await updateNotificationReadStatus(notifyId);
      if (res) {
        navigate(`/chat/${roomId}`);
      }
    } catch (error) {
      openModal(MODAL_DATAS.NOTIFICATIONS_UPDATE_FAILURE);
    }
  };

  const handleClickLastNotification = (_: number, roomId: number) => {
    navigate(`/chat/${roomId}`);
  };

  const handleClickReadAll = async () => {
    try {
      const res = await updateNotificationReadAll();
      if (res) {
        setNotifications(notifications.map(notification => { return { ...notification, read: true }; }));
      }
    } catch (error) {
      openModal(MODAL_DATAS.NOTIFICATIONS_UPDATE_FAILURE);
    }
  };

  return (
    <>
      <Header leftIcon='back' leftIconClick={handleClickBack} title='알림' />
      <StyledContainer>
        <div>
          <StyledNewTitle>
            <h2>새로운 알림</h2>
            <button onClick={handleClickReadAll} disabled={newNotifications.length === 0}>모두 읽음</button>
          </StyledNewTitle>
          {
            newNotifications.length > 0
              ? (
                <ul>
                  {
                    newNotifications.map(notification =>
                      <NotificationItem key={notification.createdAt} notification={notification} onClick={handleClickNotification} />)
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
                    lastNotifications.map(notification => <NotificationItem notification={notification} onClick={handleClickLastNotification} />)
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