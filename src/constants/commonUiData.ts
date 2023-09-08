import IconBack from '@/assets/ico_back.svg';
import IconClose from '@/assets/ico_close.svg';
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
    path: '#',
    name: '/my-page'
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
