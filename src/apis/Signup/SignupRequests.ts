import { apiClient } from '@/apis/apiClient';
import { IMessageResponse } from '@/types/Common/ICommonResponse';


export const createSignup = async (
  agree: boolean,
  email: string,
  password: string,
  buildingName: string,
  companyName: string,
  name: string,
  phoneNumber: string
): Promise<IMessageResponse> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await apiClient.post('/api/signup', {
      agree,
      email,
      password,
      buildingName,
      companyName,
      name,
      phoneNumber
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
