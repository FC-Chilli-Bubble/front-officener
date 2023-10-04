import dayjs from 'dayjs';
import { atom, selector } from 'recoil';

import { INotification } from '@/types/Notify/INotification';

export const notificationsAtom = atom<INotification[]>({
  key: 'notificationsAtom',
  default: []
});

export const filterdNotificationsState = selector({
  key: 'readNotificationsSelector',
  get: ({ get }) => {
    const notifications = get(notificationsAtom);
    const newNotifications = notifications
      .filter(noti => !noti.read)
      .sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt)));
    const lastNotifications = notifications
      .filter(noti => noti.read)
      .sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt)));

    return {
      newNotifications,
      lastNotifications
    };
  }
});
