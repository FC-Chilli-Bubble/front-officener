import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { INotification } from '@/types/Notify/INotification';

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
