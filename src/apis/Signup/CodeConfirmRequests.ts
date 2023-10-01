import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { IVerifyCode } from '@/types/Signup/ICode';

export const createCodeConfirm = async (
  phoneNumber: string,
  verifyCode: string
): Promise<ICommonResponse<IVerifyCode>> => {
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
