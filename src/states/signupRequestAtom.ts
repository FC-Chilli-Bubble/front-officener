import { atom } from 'recoil';
import { ICheckbox } from '@/types/Signup/IAgreement';
import { IAccount, IInfo } from '@/types/Signup/ISignup';
import { IOffice, IBuildings } from '@/types/Signup/IBuilding';

// 회원가입 요청 정보 데이터 취합

export const agreementCheckboxAtom = atom<ICheckbox>({
  key: 'agreementCheckboxAtom',
  default: { agree: false }
});

export const signupAccountAtom = atom<IAccount>({
  key: 'signupAccountAtom',
  default: {
    email: '',
    password: ''
  }
});

export const userDataAtom = atom<IInfo>({
  key: 'userDataAtom',
  default: {
    name: '',
    phoneNumber: ''
  }
});

export const userBuildingsAtom = atom<IBuildings>({
  key: 'userBuildingsAtom',
  default: {
    id: 0,
    buildingName: '',
    buildingAddress: '',
    offices: [
      {
        id: 0,
        officeName: '',
        officeNum: ''
      }
    ]
  }
});

export const userOfficeAtom = atom<IOffice>({
  key: 'userOfficeAtom',
  default: {
    id: 0,
    officeName: '',
    officeNum: ''
  }
});
