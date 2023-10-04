import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { AutheRes } from '@/types/Signup/ICode';

export const createhAuthCode = async (
  name: string,
  phoneNumber: string
): Promise<ICommonResponse<AutheRes>> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await apiClient.post('/api/auth', {
      name,
      phoneNumber
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
