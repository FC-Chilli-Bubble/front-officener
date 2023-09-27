import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { IBuilding } from '@/types/Signup/IBuilding';

export const fetchBuilding = async (): Promise<ICommonResponse<IBuilding[]>> => {
  const response = await apiClient.get('/api/building/{buildingName}');
  return response.data;
};
