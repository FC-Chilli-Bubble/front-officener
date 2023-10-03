import { apiClient } from '@/apis/apiClient';
import { IChatApiResponse } from '@/types/Delivery/IDeliveryChat';

export const getChats = async (token: string): Promise<IChatApiResponse> => {
  try {
    const response = await apiClient.get('/api/room/chats', {
      headers: {
        Authorization: token
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching chats:', error);
    throw error;
  }
};
