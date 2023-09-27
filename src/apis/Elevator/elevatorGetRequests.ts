import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { IObjectElevator } from '@/types/Common/Elevator/Ielevator';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJxdzc4OUBuYXZlci5jb20iLCJpYXQiOjE2OTU4MTA4MDAsImV4cCI6MTY5NTgxNDQwMH0.QnbJmsVYtgphAEUfaHnBEPle7NyrKRkw9d-r4JN0cmE';

export const fetchElevatorObj = async (): Promise<ICommonResponse<IObjectElevator[]>> => {
  const response = await apiClient.get('/api/elevator', {
    // 테스트용
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};
