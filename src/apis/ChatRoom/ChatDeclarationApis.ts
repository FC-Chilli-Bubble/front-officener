import { apiClient } from '@/apis/apiClient';
import { IChatDeclarationData } from '@/types/Chatroom/IDeclarationData';

export const createDeclarationPost = async (roomId: string, body: IChatDeclarationData) => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/report`, body);
    return response.data;
  } catch (error) {
    console.log('신고 등록 실패');
  }
};
