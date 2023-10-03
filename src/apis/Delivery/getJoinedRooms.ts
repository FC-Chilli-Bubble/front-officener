import { apiClient } from '@/apis/apiClient';
import { IApiResponse } from '@/types/Delivery/IDeliveryList';

export const getJoinedRooms = async (): Promise<IApiResponse> => {
  try {
    const response = await apiClient.get('/api/room/joinedRoom');
    return response.data;
  } catch (error) {
    throw error;
  }
};
