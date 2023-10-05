import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export const fcmTokenAtom = atom<string>({
  key: 'fcmTokenAtom',
  default: '',
  effects_UNSTABLE: [persistAtom]
});
