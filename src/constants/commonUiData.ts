import IconBack from '@/assets/ico_back.svg';
import IconClose from '@/assets/ico_close.svg';

import IconError from '@/assets/ico_error.svg';
import IconWrong from '@/assets/ico_wrong.svg';
import IconRedError from '@/assets/ico_red_error.svg';
import IconCheck from '@/assets/ico_check.svg';
import IconHome from '@/assets/ico_home.svg';
import IconDelivery from '@/assets/ico_delivery.svg';
import IconMy from '@/assets/ico_my.svg';
import IconHomeOff from '@/assets/ico_home_off.svg';
import IconDeliveryOff from '@/assets/ico_delivery_off.svg';
import IconMyOff from '@/assets/ico_my_off.svg';
import IconMore from '@/assets/ico_more.svg';

export const HEADER_LEFT_ICONS = {
  back: IconBack,
  close: IconClose,
  none: null
};

export const INPUT_ERROR_MESSAGE = {
  error: IconError,
  none: null
};

export const INPUT_REDERROR_MESSAGE = {
  wrong: IconWrong,
  error: IconRedError,
  none: null
};
export const INPUT_GRAYERROR_MESSAGE = {
  error: IconRedError,
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
