self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {});

self.addEventListener('push', e => {
  console.log('push 알림 발생');
  if (!e.data.json()) {
    return;
  }

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;
  const notificationOptions = {
    body: resultData.body,
    icon: resultData.image, // 웹 푸시 이미지는 icon
    tag: resultData.tag
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
