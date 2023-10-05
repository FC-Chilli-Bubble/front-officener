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
