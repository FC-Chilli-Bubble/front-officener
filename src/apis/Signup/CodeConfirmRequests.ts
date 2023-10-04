import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';

export const createCodeConfirm = async (
  phoneNumber: string,
  verifyCode: string
): Promise<ICommonResponse<string>> => {
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
