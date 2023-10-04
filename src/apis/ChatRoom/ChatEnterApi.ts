import { apiClient } from '@/apis/apiClient';

export const getRoomInfo = async (roomId: number) => {
    try {
        const response = await apiClient.post(`/api/chat/${roomId}/connect`);
        return response.data;
    } catch (error) {
        throw error;
    }
};