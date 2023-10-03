import { atom, selector } from 'recoil';
import { IUser } from '@/types/Login/IUser';

export const userInfoAtom = atom<IUser>({
  key: 'userInfoAtom',
  default: {
    userInfo: {
      id: 0,
      email: '',
      name: '',
      phoneNumber: '',
      building: {
        id: 0,
        buildingName: '',
        buildingAddress: ''
      },
      office: {
        id: 0,
        officeName: '',
        officeNum: ''
      },
      token: ''
    }
  }
});

export const userInfoSelector = selector<IUser>({
  key: 'userInfoSelector',
  get: ({ get }) => {
    const user = get(userInfoAtom);
    return user || null;
  }
});
