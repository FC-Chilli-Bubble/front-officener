import { apiClient } from '@/apis/apiClient';
import { IKick, IKickRequest } from '@/types/Chatroom/IExit';

//채팅 나가기 post
export const createExitPost = async (roomId: number) => {
   await apiClient.post(`/api/chat/${roomId}/exit`);
};

//나가기 요청 post
export const createKickRequestPost = async (roomId: number, body : IKickRequest) => {
   await apiClient.post(`/api/chat/${roomId}/kickRequest`, body);
};

//강퇴 post
export const createKickPost = async (roomId: number, body : IKick) => {
  await apiClient.post(`/api/chat/${roomId}/kick`, body);
};
