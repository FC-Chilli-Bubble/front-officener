import { apiClient } from '@/apis/apiClient';
import { ICommonResponse, IMessageResponse } from '@/types/Common/ICommonResponse';
import { IBank } from '@/types/Delivery/IBank';
import { IDeliveryPostRequest } from '@/types/Delivery/IDeliveryPostRequest';

// api 연동 테스트용 토큰
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJldW5nYkBnbWFpbC5jb20iLCJpYXQiOjE2OTU3MTI1MTcsImV4cCI6MTY5NTcxNjExN30.ZbMzx3KRGN8jkKdD85INRJ60EqRUWoyk9jeFHJr2pzc';

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

// 함께배달 글 수정
export const updateDeliveryPost = async (roomId: number, post: IDeliveryPostRequest) => {
  const response = await apiClient.put(`/api/room/${roomId}`, post, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};
