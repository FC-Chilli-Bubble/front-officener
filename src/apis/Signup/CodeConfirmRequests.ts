import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { IConfirm } from '@/types/Signup/IConfirm'
  
export const createCodeConfirm = async (): Promise<ICommonResponse<IConfirm>> => {
  const response = await apiClient.post('/api/confirm');
  return response.data;
};
