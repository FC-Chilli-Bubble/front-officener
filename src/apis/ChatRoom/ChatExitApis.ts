import { apiClient } from '@/apis/apiClient';
import { IMessageResponse } from '@/types/Common/ICommonResponse';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { IKick, IKickRequest, IChatExitRes } from '@/types/Chatroom/IExit';

//채팅 나가기 post
export const createExitPost = async (roomId: number): Promise<IMessageResponse> => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/exit`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//나가기 요청 post
export const createKickRequestPost = async (
  roomId: number,
  body: IKickRequest
): Promise<ICommonResponse<IChatExitRes>> => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/kickRequest`, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//강퇴 post
export const createKickPost = async (roomId: number, body: IKick): Promise<IMessageResponse> => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/kick`, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
