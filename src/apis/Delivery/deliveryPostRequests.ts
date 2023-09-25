import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { IBank } from '@/types/Delivery/IBank';

export const fetchBankList = async (): Promise<ICommonResponse<IBank>> => {
  const response = await apiClient.get('/api/room/bankList');
  return response.data;
};
