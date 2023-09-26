import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { IDeliveryPost } from '@/types/Delivery/IDeliveryPost';

export const fetchDeliveryPostDetail = async (
  roomId: string
): Promise<ICommonResponse<IDeliveryPost>> => {
  const response = await apiClient.get(`/api/room/${roomId}`);
  return response.data;
};
