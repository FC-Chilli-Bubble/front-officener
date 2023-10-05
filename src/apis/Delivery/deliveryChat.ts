import { apiClient } from '@/apis/apiClient';
import { IChatApiResponse } from '@/types/Delivery/IDeliveryChat';

export const getChats = async (): Promise<IChatApiResponse> => {
  try {
    const response = await apiClient.get('/api/room/chats?size=50');
    return response.data;
  } catch (error) {
    throw error;
  }
};
