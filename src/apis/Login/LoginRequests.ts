import { apiClient } from '@/apis/apiClient';
import { IUser } from '@/states/userDataAtom';
import { ICommonResponse } from '@/types/Common/ICommonResponse';

export const createLogin = async (
  email: IUser['userInfo']['email'],
  password: string
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
