import { apiClient } from '@/apis/apiClient';

const handleApiError = (error: any) => {
  console.error('API Error:', error);
  throw error;
};

// guset 송금 완료
export const createGuestRemittedPost = async (roomId: number) => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/remitted`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// guset 수령 완료
export const createGuestReceivedPost = async (roomId: number) => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/received`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

//host 참여 마감하기
export const createHostClosedPost = async (roomId: number) => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/closed`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
//host 배달 완료
export const createHostDeliveredPost = async (roomId: number) => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/delivered`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
