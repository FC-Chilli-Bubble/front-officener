import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { ISignup } from '@/types/Signup/ISignup';

export const createSignup = async (): Promise<ICommonResponse<ISignup>> => {
  const response = await apiClient.post('/api/signup');
  return response.data;
};
