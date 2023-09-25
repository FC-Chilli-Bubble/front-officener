import { apiClient } from '@/apis/apiClient';
import { ICommonResponse, IMessageResponse } from '@/types/Common/ICommonResponse';
import { IBank } from '@/types/Delivery/IBank';
import { IDeliveryPostRequest } from '@/types/Delivery/IDeliveryPostRequest';

// api 연동 테스트용 토큰
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJldW5nYkBnbWFpbC5jb20iLCJpYXQiOjE2OTU2NDc2NjcsImV4cCI6MTY5NTY1MTI2N30.V7sFGeOmP471t8iXxSr9vVjGAhqxqHqyFpLh4xA0XJo';

// 은행 목록 조회
export const fetchBankList = async (): Promise<ICommonResponse<IBank>> => {
  const response = await apiClient.get('/api/room/bankList');
  return response.data;
};

// 함께 배달 등록
export const createDeliveryPost = async (
  post: IDeliveryPostRequest
): Promise<ICommonResponse<IMessageResponse>> => {
  const response = await apiClient.post('/api/room/create', post, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

// 함께배달 글 삭제
export const deleteDeliveryPost = async (
  roomId: number
): Promise<ICommonResponse<IMessageResponse>> => {
  const response = await apiClient.post(`/api/room/${roomId}/terminate`, null, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};
