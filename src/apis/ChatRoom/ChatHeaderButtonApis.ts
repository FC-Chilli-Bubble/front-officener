import { apiClient } from '@/apis/apiClient';

const tocken =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZXIwMDFAbmF2ZXIuY29tIiwiaWF0IjoxNjk1NjMyNDQ3LCJleHAiOjE2OTU2MzYwNDd9.5rWtWiEJbcc_zZHnJhe1hXm-qDoTC8NdDYw5nY7KqOA';

// guset 송금 완료
export const createGuestRemittedPost = async (roomId: number) => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/remitted`, {
      headers: {
        Authorization: tocken
      }
    });
    return response.data;
  } catch (error) {
    console.log('송금 알람 전송 실패');
  }
};

// guset 수령 완료
export const createGuestReceivedPost = async (roomId: number) => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/received`, {
      headers: {
        Authorization: tocken
      }
    });
    return response.data;
  } catch (error) {
    console.log('수령 알람 전송 실패');
  }
};

//host 참여 마감하기
export const createHostClosedPost = async (roomId: number) => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/closed`, {
      headers: {
        Authorization: tocken
      }
    });
    return response.data;
  } catch (error) {
    console.log('배달 알람 전송 실패');
  }
};
//host 배달 완료
export const createHostDeliveredPost = async (roomId: number) => {
  try {
    const response = await apiClient.post(`/api/chat/${roomId}/delivered`, {
      headers: {
        Authorization: tocken
      }
    });
    return response.data;
  } catch (error) {
    console.log('배달 알람 전송 실패');
  }
};
