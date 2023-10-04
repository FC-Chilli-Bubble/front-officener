import { apiClient } from '@/apis/apiClient';
import { IApiResponse } from '@/types/Delivery/IDeliveryList';

export const deliverylist = async (): Promise<IApiResponse> => {
  try {
    const response = await apiClient.get('/api/room');
    return response.data;
  } catch (error) {
    throw error;
  }
};
