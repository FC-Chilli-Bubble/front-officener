import { atom } from 'recoil';
import { IBuildings } from '@/types/Signup/IBuilding';

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
