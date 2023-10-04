import { apiClient } from '@/apis/apiClient';

export const createDeclarationPost = async (roomId: string) => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/report`);
    return response.data;
  } catch (error) {
    console.log('신고 등록 실패');
  }
};
