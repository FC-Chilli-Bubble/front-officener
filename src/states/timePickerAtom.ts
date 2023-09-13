import { atom } from 'recoil';

type TTimePickerData = {
  time: string;
  houres: string;
  minutes: string;
};

export const timePickerAtom = atom<TTimePickerData>({
  key: 'timePickerAtom',
  default: {
    time: '',
    houres: '',
    minutes: ''
  }
});
