interface IBankType {
  [bank: string]: string;
}

interface IBankNumberType {
  [bank: string]: number;
}

export const BANKS: IBankType = {
  KB국민은행: 'KB',
  신한은행: 'SHINHAN',
  우리은행: 'WOORI',
  하나은행: 'HANA',
  SC제일은행: 'SC',
  씨티은행: 'CITI',
  경남은행: 'GYEONGNAM',
  광주은행: 'GWANGJU',
  대구은행: 'DAEGU',
  부산은행: 'BUSAN',
  전북은행: 'JEONBUK',
  제주은행: 'JEJU',
  기업은행: 'KIUP',
  농협: 'NONGHYUP',
  수협: 'SUHYEOP',
  산업은행: 'SANUP',
  케이비뱅크: 'KBANK',
  카카오뱅크: 'KAKAO',
  토스뱅크: 'TOSS'
};

export const BANKS_MAX_NUM: IBankNumberType = {
  KB: 14,
  SHINHAN: 12,
  WOORI: 13,
  HANA: 14,
  SC: 11,
  CITI: 12,
  GYEONGNAM: 11,
  GWANGJU: 12,
  DAEGU: 12,
  BUSAN: 13,
  JEONBUK: 13,
  JEJU: 10,
  KIUP: 14,
  NONGHYUP: 13,
  SUHYEOP: 12,
  SANUP: 14,
  KBANK: 12,
  KAKAO: 13,
  TOSS: 13
};