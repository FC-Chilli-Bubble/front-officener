import IconBack from '@/assets/ico_back.svg';
import IconClose from '@/assets/ico_close.svg';

import IconError from '@/assets/ico_error.svg';
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
    path: '#',
    name: '/my-page'
  }
];
