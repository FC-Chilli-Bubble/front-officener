import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { ISignup } from '@/types/Signup/ISignup';

export const createSignup = async (
  agree: boolean,
  email: string,
  password: string,
  buildingName: string,
  officenName: string,
  name: string,
  phoneNumber: string
): Promise<ICommonResponse<ISignup>> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await apiClient.post('/api/signup', {
      agree,
      email,
      password,
      buildingName,
      officenName,
      name,
      phoneNumber
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
