import axios from 'axios';
import { apiClient } from '@/apis/apiClient';
import { IElevator, IObjectElevator } from '@/types/Elevator/IElevator';

export const featchElevators = async (): Promise<IElevator> => {
  try {
    const res = await axios
      .all([apiClient.get('/api/elevator/all'), apiClient.get('/api/elevator')])
      .then(
        axios.spread((resAll, resUsers) => {
          return {
            allElevators: resAll.data.data as IObjectElevator[],
            userElevators: resUsers.data.data as IObjectElevator[]
          } as IElevator;
        })
      );
    return Promise.resolve(res);
  } catch (error) {
    throw error;
  }
};

export const updateSelectedElevators = async (selectedIds: number[]): Promise<boolean> => {
  const response = await apiClient.post('/api/elevator', { selectedIds });
  return response.status === 200;
};
