import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { IFcmTokenStatus, INotification } from '@/types/Notify/INotification';

export const fetchAllNotifications = async (): Promise<ICommonResponse<INotification[]>> => {
  const response = await apiClient.get('/api/notify');
  return response.data;
};

export const updateNotificationReadStatus = async (notifyId: number): Promise<boolean> => {
  const response = await apiClient.post(`/api/notify/${notifyId}`);
  return response.status === 200;
};

export const updateNotificationReadAll = async (): Promise<boolean> => {
  const response = await apiClient.post('/api/notify/readAll');
  return response.status === 200;
};

export const updateFcmToken = async (tokenStatus: IFcmTokenStatus) => {
  const response = await apiClient.post('/api/notify/fcm-token', tokenStatus);
  return response.status === 200 || response.status === 201;
};

export const updateFcmTokenToLogin = async (tokenStatus: IFcmTokenStatus, accessToken: string) => {
  const response = await apiClient.post('/api/notify/fcm-token', tokenStatus, {
    headers: { Authorization: 'Bearer ' + accessToken }
  });
  return response.status === 200 || response.status === 201;
};
