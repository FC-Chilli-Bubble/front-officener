import { apiClient } from '@/apis/apiClient';
import { IMessageResponse } from '@/types/Common/ICommonResponse';
import { ISignup } from '@/types/Signup/ISignup';

export const createSignup = async (signupData: ISignup): Promise<IMessageResponse> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await apiClient.post('/api/signup', signupData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
