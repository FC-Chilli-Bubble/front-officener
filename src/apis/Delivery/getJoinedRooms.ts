import { apiClient } from '@/apis/apiClient';
import { IApiResponse } from '@/types/Delivery/IDeliveryList';

export const getJoinedRooms = async (token: string): Promise<IApiResponse> => {
  try {
    const response = await apiClient.get('/api/room/joinedRoom', {
      headers: {
        Authorization: token
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching joined rooms:', error);
    throw error;
  }
};
