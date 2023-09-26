import { atom, selector } from 'recoil';

interface IBuilding {
  id: 0;
  buildingName: '';
  buildingAddress: '';
}

interface Company {
  officeId: number;
  officeName: string;
  officeNum: string;
}
export interface IUser {
  userInfo: {
    id: number;
    email: string;
    name: string;
    phoneNumber: string;
    building: IBuilding;
    company: Company;
    token: string;
  };
}
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
  }
});

export const userInfoSelector = selector({
  key: 'userInfoSelector',
  get: ({ get }) => {
    const user = get(userInfoAtom);
    return user?.userInfo || null;
  }
});
