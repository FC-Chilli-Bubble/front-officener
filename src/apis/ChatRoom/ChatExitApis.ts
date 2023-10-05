import { apiClient } from '@/apis/apiClient';
import { IMessageResponse } from '@/types/Common/ICommonResponse';

//채팅 나가기 post
export const createExitPost = async (roomId: string): Promise<IMessageResponse> => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/exit`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//나가기 요청 post
export const createKickRequestPost = async (
  roomId: string,
): Promise<IMessageResponse> => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/kickRequest`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//강퇴 post
export const createKickPost = async (roomId: string): Promise<IMessageResponse> => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/kick`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
