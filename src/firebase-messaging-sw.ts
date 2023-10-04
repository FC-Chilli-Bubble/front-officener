import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGING_ID,
  appId: import.meta.env.VITE_FB_APP_ID,
  measurementId: import.meta.env.VITE_FB_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);
// const analytics = getAnalytics(app);

const requestPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission === 'denied') {
    return;
  }

  // getToken(messaging, {
  //   vapidKey: import.meta.env.VITE_FB_VAP_ID
  // }).then(
  //   token => {
  //     console.log('fb token:', token);
  //   },
  //   error => {
  //     console.log('token fail', error);
  //   }
  // );
};

requestPermission();
