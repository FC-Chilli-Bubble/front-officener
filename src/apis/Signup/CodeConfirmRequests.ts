import { apiClient } from '@/apis/apiClient';
import { IMessageResponse } from '@/types/Common/ICommonResponse';

export const createCodeConfirm = async ( 
  phoneNumber: string,
  verifyCode: string
): Promise<IMessageResponse> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await apiClient.post('/api/confirm', {
      phoneNumber,
      verifyCode
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
