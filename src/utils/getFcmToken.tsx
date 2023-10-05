import { getToken } from 'firebase/messaging';
import { messaging } from '@/firebase-messaging-sw.ts';

export const getFcmToken = async () => {
  const fcmToken = await getToken(messaging, {
    vapidKey: import.meta.env.VITE_FB_VAP_ID
  }).then(
    (token: string) => {
      return token;
    },
    () => {
      return '';
    }
  );
  return fcmToken;
};
