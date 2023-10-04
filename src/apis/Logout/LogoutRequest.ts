import { apiClient } from '@/apis/apiClient';
import { IMessageResponse } from '@/types/Common/ICommonResponse';

export const createLogout = async (): Promise<IMessageResponse> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await apiClient.post('/api/logout');
    return response.data;
  } catch (error) {
    throw error;
  }
};
