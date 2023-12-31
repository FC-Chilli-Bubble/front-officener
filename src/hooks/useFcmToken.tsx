import { useRecoilState } from 'recoil';
import { fcmTokenAtom } from '@/states/fcmTokenAtom';
import { updateFcmToken, updateFcmTokenToLogin } from '@/apis/Notify/notifyRequests';
import { getFcmToken } from '@/utils/getFcmToken';
import { useModal } from './useModal';
import { useCallback, useMemo } from 'react';

const useFcmToken = () => {
  const [fcmToken, setFcmToken] = useRecoilState(fcmTokenAtom);
  const { openModal } = useModal();
  const localPermission = useMemo(() => localStorage.getItem('pushNotifyPermission'), []);

  const clearLocalPermission = () => {
    localStorage.removeItem('pushNotifyPermission');
  };

  const requestFcmTokenPermission = useCallback(async () => {
    // 토큰이 이미 있는 경우
    if (fcmToken) {
      return;
    }

    // 알림 권한 확인
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      clearLocalPermission();
      try {
        getFcmToken().then(
          token => {
            setFcmToken(token);
            return token;
          }
        ).then(token => updateOnNotify(token)); // 처음 권한 허용되는 경우 알림을 켠 상태로 저장
      } catch (error) {
        console.log(error);
      }
      return;
    }

    // 처음 거부한 경우
    if (localPermission !== 'denied' && localPermission !== null) {
      if (permission === 'denied') {
        localStorage.setItem('pushNotifyPermission', 'denied');
        openModal({
          title: '푸시 알림 권한이 거부되었습니다',
          content: '푸시 알림 기능을 사용하시려면\n알림 권한을 허용해주세요!',
          positive: '닫기',
        });
        return;
      }
    }

  }, [fcmToken, openModal, setFcmToken, localPermission]);

  const getNewFcmToken = async () => {
    getFcmToken().then(token => {
      setFcmToken(token);
    });
  };

  const setFcmTokenToLogin = async (accessToken: string) => {
    if (fcmToken) {
      await updateFcmTokenToLogin({ fcmToken: fcmToken, type: 'KEEP' }, accessToken);
    }
  };

  const setFcmTokenToOnNotify = async () => {
    if (localStorage.getItem('pushNotifyPermission') === 'denide') {
      openModal({
        title: '알림 권한이 거부됨',
        content: '알림 권한을 허용 후 다시 시도해주세요',
        positive: '확인',
      });
      return;
    }

    if (fcmToken) {
      try {
        await updateFcmToken({ fcmToken: fcmToken, type: 'ACTIVATE' });
      } catch (error) {
        openModal({
          title: '알림 활성화',
          content: '알림 상태 변경 중 오류가 발생했습니다',
          positive: '확인',
        });
      }
      return;
    }
  };

  const setFcmTokenToOffNotify = async () => {
    try {
      await updateFcmToken({ fcmToken: '', type: 'INACTIVATE' });
    } catch (error) {
      openModal({
        title: '알림 비활성화',
        content: '알림 상태 변경 중 오류가 발생했습니다',
        positive: '확인',
      });
    }
  };

  const updateOnNotify = async (token: string) => {
    await updateFcmToken({ fcmToken: token, type: 'ACTIVATE' });
  };

  return { requestFcmTokenPermission, setFcmTokenToLogin, setFcmTokenToOnNotify, setFcmTokenToOffNotify, getNewFcmToken };
};

export default useFcmToken;