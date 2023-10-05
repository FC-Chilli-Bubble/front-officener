import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { IDeliveryPost } from '@/types/Delivery/IDeliveryPost';

export const fetchDeliveryPostDetail = async (
  roomId: string
): Promise<ICommonResponse<IDeliveryPost>> => {
  const response = await apiClient.get(`/api/room/${roomId}`);
  return response.data;
};

export const requestJoinChat = async (roomId: string): Promise<boolean> => {
  const response = await apiClient.post(`/api/room/${roomId}/join`);
  if (response.status === 200 || response.status === 201) {
    return true;
  }
  return false;
};

export const requestFirstEnterChat = async (roomId: string): Promise<boolean> => {
  const response = await apiClient.post(`/api/chat/${roomId}/enter`);
  if (response.status === 200) {
    return true;
  }
  return false;
};
