import IconBack from '@/assets/ico_back.svg';
import IconClose from '@/assets/ico_close.svg';

import IconWrong from '@/assets/ico_wrong.svg';
import IconGrayError from '@/assets/ico_gray_error.svg';
import IconRedError from '@/assets/ico_red_error.svg';
import IconGreenCheck from '@/assets/ico_green_check.svg';
import IconCheck from '@/assets/ico_check.svg';
import IconHome from '@/assets/ico_home.svg';
import IconDelivery from '@/assets/ico_delivery.svg';
import IconMy from '@/assets/ico_my.svg';
import IconHomeOff from '@/assets/ico_home_off.svg';
import IconDeliveryOff from '@/assets/ico_delivery_off.svg';
import IconMyOff from '@/assets/ico_my_off.svg';
import IconMore from '@/assets/ico_more.svg';
import ImagePorkmeet from '@/assets/food/PORKFEET.svg';
import ImageSUSHI from '@/assets/food/SUSHI.svg';
import ImageZZIM from '@/assets/food/ZZIM.svg';
import ImagePIZZA from '@/assets/food/PIZZA.svg';
import ImageCHICKEN from '@/assets/food/CHICKEN.svg';
import ImageASIAN from '@/assets/food/ASIAN.svg';
import ImageBAEKBAN from '@/assets/food/BAEKBAN.svg';
import ImageBUNSIK from '@/assets/food/BUNSIK.svg';
import ImageCAFE from '@/assets/food/CAFE.svg';
import ImageCHINESE from '@/assets/food/CHINESE.svg';
import ImageMEET from '@/assets/food/MEET.svg';
import ImageDOSIRAK from '@/assets/food/DOSIRAK.svg';

export const HEADER_LEFT_ICONS = {
  back: IconBack,
  close: IconClose,
  none: null
};

export const INPUT_ERROR_ICONS = {
  errorG: IconGrayError, //grey !
  error: IconRedError, // red !
  wrong: IconWrong, // red x
  correct: IconGreenCheck, // green v
  none: null
};

export const INPUT_CHECK_ICONS = {
  check: IconCheck,
  none: null
};

export const HEADER_RIGHT_ICONS = {
  more: IconMore,
  none: null
};

export const NAV_MENU = [
  {
    title: '홈',
    active: IconHome,
    inactive: IconHomeOff,
    path: '/',
    name: '/home'
  },
  {
    title: '함께배달',
    active: IconDelivery,
    inactive: IconDeliveryOff,
    path: '/delivery',
    name: '/delivery'
  },
  {
    title: 'My',
    active: IconMy,
    inactive: IconMyOff,
    path: '/mypage',
    name: '/mypage'
  }
];

export const HOME_OFFICE = [
  {
    title: '정기점검',
    content: '10월 10일 엘리베이터 정기 점검 예정'
  },
  {
    title: '공동생활',
    content: '우리 오피스를 위한 공동생활 규칙'
  },
  {
    title: '공지사항',
    content: '10월 입주자 정기회의 일정 안내'
  }
];

export const FOOD_TAG = [
  '족발,보쌈',
  '회,일식',
  '찜,탕,찌개',
  '피자',
  '치킨',
  '아시안',
  '백반',
  '분식',
  '카페,디저트',
  '중식',
  '고기,구이',
  '도시락'
];

interface IFoodTagType {
  [name: string]: string;
}

export const FOODTAGS: IFoodTagType = {
  '족발,보쌈': 'PORKFEET',
  '회,일식': 'SUSHI',
  '찜,탕,찌개': 'ZZIM',
  피자: 'PIZZA',
  치킨: 'CHICKEN',
  아시안: 'ASIAN',
  백반: 'BAEKBAN',
  분식: 'BUNSIK',
  '카페,디저트': 'CAFE',
  중식: 'CHINESE',
  '고기,구이': 'MEET',
  도시락: 'DOSIRAK'
};

export const FOOD_IMAGE: IFoodTagType = {
  PORKFEET: ImagePorkmeet,
  SUSHI: ImageSUSHI,
  ZZIM: ImageZZIM,
  PIZZA: ImagePIZZA,
  CHICKEN: ImageCHICKEN,
  ASIAN: ImageASIAN,
  BAEKBAN: ImageBAEKBAN,
  BUNSIK: ImageBUNSIK,
  CAFE: ImageCAFE,
  CHINESE: ImageCHINESE,
  MEET: ImageMEET,
  DOSIRAK: ImageDOSIRAK
};

export const MY_PAGE_MENU = [
  {
    title: '내 정보 보기',
    path: '/mypage/profile'
  },
  {
    title: '오피스 관리',
    path: '#'
  },
  {
    title: '구성원 관리',
    path: '#'
  },
  {
    title: '설정',
    path: '#'
  }
];

export const Floor_TAG = [
  '1호기',
  '2호기',
  '3호기',
  '4호기',
  '5호기',
  '6호기',
  '7호기',
  '8호기',
  '9호기',
  '10호기',
  '11호기',
  '12호기'
];
