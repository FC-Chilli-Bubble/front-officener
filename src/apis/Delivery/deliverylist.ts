import { apiClient } from '@/apis/apiClient';
import { IApiResponse } from '@/types/Delivery/IDeliveryList';

export const deliverylist = async (): Promise<IApiResponse> => {
  console.log('deliverylist called');
  try {
    const response = await apiClient.get('/api/room/list');
    return response.data;
  } catch (error) {
    console.log('Failed to fetch rooms:', error);
    console.error('Failed to fetch rooms:', error);
    throw error;
  }
};
