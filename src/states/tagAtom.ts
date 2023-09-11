import { atom } from 'recoil';

type TagType = 'cta' | 'primary';

export const tagState = atom<{ [key: string]: TagType }>({
  key: 'tagState',
  default: {
    tag1: 'primary',
    tag2: 'primary'
    // 필요한 다른 태그들도 추가할 수 있습니다.
  }
});
