import { initializeApp } from 'firebase/app';

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

// export const messaging = getMessaging(app);

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {});

self.addEventListener('push', e => {
  console.log('push >>>>>>');
  console.log(e.data);
  if (!e.data.json()) {
    return;
  }

  const resultData = JSON.parse(e.data.json().data.notification);
  const notificationTitle = resultData.title;
  const notificationOptions = {
    body: resultData.body,
    icon: resultData.image, // 웹 푸시 이미지는 icon
    tag: resultData.tag
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
