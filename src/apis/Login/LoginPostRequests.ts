import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { ILogin } from '@/types/Login/ILogin';

export const createLogin = async (
  email: string,
  password: string
): Promise<ICommonResponse<ILogin>> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await apiClient.post('/api/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
