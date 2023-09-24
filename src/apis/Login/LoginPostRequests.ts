import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { ILogin } from '@/types/Login/ILogin';

export const createLogin = async (): Promise<ICommonResponse<ILogin[]>> => {
  const response = await apiClient.post('/api/login');
  return response.data;
};
