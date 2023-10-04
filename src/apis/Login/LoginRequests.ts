import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { IUser } from '@/types/Login/IUser';

export const createLogin = async (
  email: string,
  password: string,
): Promise<ICommonResponse<IUser>> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await apiClient.post('/api/login', {
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
