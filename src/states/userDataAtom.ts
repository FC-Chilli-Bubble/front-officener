import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { IUser } from '@/types/Login/IUser';

const { persistAtom } = recoilPersist();
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
      // office로 변경 예정
      company: {
        officeId: 0,
        officeName: '',
        officeNum: ''
      },
      token: ''
    }
  },
  effects_UNSTABLE: [persistAtom]
});

export const userInfoSelector = selector<IUser>({
  key: 'userInfoSelector',
  get: ({ get }) => {
    const user = get(userInfoAtom);
    return user || null;
  }
});
