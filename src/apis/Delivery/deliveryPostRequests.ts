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
  const response = await apiClient.post('/api/room/create', post, {
    // TODO : 테스트용
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZXIwMDFAbmF2ZXIuY29tIiwiaWF0IjoxNjk1NjMyNDQ3LCJleHAiOjE2OTU2MzYwNDd9.5rWtWiEJbcc_zZHnJhe1hXm-qDoTC8NdDYw5nY7KqOA'
    }
  });
  return response.data;
};
