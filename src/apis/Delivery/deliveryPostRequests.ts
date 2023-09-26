import { apiClient } from '@/apis/apiClient';
import { ICommonResponse, IMessageResponse } from '@/types/Common/ICommonResponse';
import { IBank } from '@/types/Delivery/IBank';
import { IDeliveryPostRequest } from '@/types/Delivery/IDeliveryPostRequest';

// 은행 목록 조회
export const fetchBankList = async (): Promise<ICommonResponse<IBank>> => {
  const response = await apiClient.get('/api/room/bankList');
  return response.data;
};

// 함께 배달 등록
export const createDeliveryPost = async (
  post: IDeliveryPostRequest
): Promise<ICommonResponse<IMessageResponse>> => {
  const response = await apiClient.post('/api/room/create', post);
  return response.data;
};

// 함께배달 글 삭제
export const deleteDeliveryPost = async (
  roomId: string
): Promise<ICommonResponse<IMessageResponse>> => {
  const response = await apiClient.post(`/api/room/${roomId}/terminate`);
  return response.data;
};

// 함께배달 글 수정
export const updateDeliveryPost = async (roomId: number, post: IDeliveryPostRequest) => {
  const response = await apiClient.put(`/api/room/${roomId}`, post);
  return response.data;
};
