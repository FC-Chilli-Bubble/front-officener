import { apiClient } from '@/apis/apiClient';
import { ICommonResponse } from '@/types/Common/ICommonResponse';
import { IBuilding } from '@/types/Signup/IBuilding';

export const fetchBuilding = async (
  buildingName: string
): Promise<ICommonResponse<IBuilding[]>> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await apiClient.get(`/api/building?name=${buildingName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
