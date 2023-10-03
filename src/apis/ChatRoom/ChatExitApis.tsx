import { apiClient } from '@/apis/apiClient';
import { IKick, IKickRequest } from '@/types/Chatroom/IExit';

const handleApiError = (error: any) => {
  console.error('API Error:', error);
  throw error;
};

//채팅 나가기 post
export const createExitPost = async (roomId: number) => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/exit`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

//나가기 요청 post
export const createKickRequestPost = async (roomId: number, body : IKickRequest) => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/kickRequest`, body);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

//강퇴 post
export const createKickPost = async (roomId: number, body : IKick) => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/kick`, body);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
