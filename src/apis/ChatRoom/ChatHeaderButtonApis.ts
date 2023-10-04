import { apiClient } from '@/apis/apiClient';

// guset 송금 완료
export const createGuestRemittedPost = async (roomId: string) => {
  await apiClient.post(`/api/chat/${roomId}/remitted`);
};

// guset 수령 완료
export const createGuestReceivedPost = async (roomId: string) => {
  await apiClient.post(`/api/chat/${roomId}/received`);
};

//host 참여 마감하기
export const createHostClosedPost = async (roomId: string) => {
  await apiClient.post(`/api/chat/${roomId}/closed`);
};
//host 배달 완료
export const createHostDeliveredPost = async (roomId: string) => {
  await apiClient.post(`/api/chat/${roomId}/delivered`);
};
