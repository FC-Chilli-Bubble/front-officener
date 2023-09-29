import { atom } from 'recoil';
import { ICheckbox } from '@/types/Signup/IAgreement';
import { IResident, IAccount } from '@/types/Signup/ISignup';

// 회원가입 요청 정보 데이터 취합

export const agreementCheckboxAtom = atom<ICheckbox>({
  key: 'agreementCheckboxAtom',
  default: { agree: false }
});

export const userResidentAtom = atom<IResident>({
  key: 'userResidentAtom',
  default: {
    buildingName: '',
    officeName: ''
  }
});

export const SignupAccountAtom = atom<IAccount>({
  key: 'SignupAccountAtom',
  default: {
    email: '',
    password: ''
  }
});

// export const verificationResultState = atom({
//   key: 'verificationResultState',
//   default: null // 초기에는 아무 값도 없음
// });

// export const userSignupAtom = atom<ISignup>({
//   key: 'userSignupAtom',
//   default: {
//     userInfo: {
//       id: 0,
//       email: '',
//       name: '',
//       phoneNumber: '',
//       building: {
//         id: 0,
//         buildingName: '',
//         buildingAddress: ''
//       },
//       // office로 변경 예정
//       company: {
//         officeId: 0,
//         officeName: '',
//         officeNum: ''
//       },
//       token: ''
//     }
//   }
// });

// export const userSignSelector = selector<ISignup>({
//   key: 'userSignSelector',
//   get: ({ get }) => {
//     const user = get(userSignupAtom);
//     return user || null;
//   }
// });
