import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { IAuth } from '@/types/Signup/IAuth';

export const createhAuthCode = async (): Promise<ICommonResponse<IAuth>> => {
  const response = await apiClient.post('/api/auth');
  return response.data;
};