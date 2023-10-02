import { atom } from 'recoil';
import { IOffice } from '@/types/Signup/IBuilding';

export const userOfficeAtom = atom<IOffice>({
  key: 'userOfficeAtom',
  default: {
    id: 0,
    officeName: '',
    officeNum: ''
  }
});
