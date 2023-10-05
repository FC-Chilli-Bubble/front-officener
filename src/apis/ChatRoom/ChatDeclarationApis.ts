import { apiClient } from '@/apis/apiClient';
import { IChatDeclarationData } from '@/types/Chatroom/IDeclarationData';

export const createDeclarationPost = async (roomId: string, body: IChatDeclarationData) => {
  await apiClient.post(`/api/chat/${roomId}/report`, body);
};
