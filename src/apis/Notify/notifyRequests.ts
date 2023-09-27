import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { INotification } from '@/types/Notify/INotification';

export const fetchAllNotifications = async (): Promise<ICommonResponse<INotification[]>> => {
  const response = await apiClient.get('/api/notify/list');
  return response.data;
};
