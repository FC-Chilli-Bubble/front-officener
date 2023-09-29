import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { IObjectElevator } from '@/types/Elevator/IElevator';

export const fetchElevatorObj = async (): Promise<ICommonResponse<IObjectElevator[]>> => {
  const response = await apiClient.get('/api/elevator');
  return response.data;
};
