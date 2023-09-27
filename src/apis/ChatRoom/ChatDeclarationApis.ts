import { apiClient } from '@/apis/apiClient';

export const createDeclarationPost = async (roomId: number) => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/report`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZXIwMDFAbmF2ZXIuY29tIiwiaWF0IjoxNjk1NjMyNDQ3LCJleHAiOjE2OTU2MzYwNDd9.5rWtWiEJbcc_zZHnJhe1hXm-qDoTC8NdDYw5nY7KqOA'
      }
    });
    return response.data;
  } catch (error) {
    console.log('신고 등록 실패');
  }
};
