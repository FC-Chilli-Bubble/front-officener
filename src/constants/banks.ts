// export type TBankKey =
//   | 'KB국민은행'
//   | '신한은행'
//   | '우리은행'
//   | '하나은행'
//   | 'SC제일은행'
//   | '씨티은행'
//   | '경남은행'
//   | '광주은행'
//   | '대구은행'
//   | '부산은행'
//   | '전북은행'
//   | '제주은행'
//   | '기업은행'
//   | '농협'
//   | '수협'
//   | '산업은행'
//   | '케이비뱅크'
//   | '카카오뱅크'
//   | '토스뱅크';
export type TBankKey =
  | 'KB'
  | 'SHINHAN'
  | 'WOORI'
  | 'HANA'
  | 'SC'
  | 'CITI'
  | 'GYEONGNAM'
  | 'GWANGJU'
  | 'DAEGU'
  | 'BUSAN'
  | 'JEONBUK'
  | 'JEJU'
  | 'KIUP'
  | 'NONGHYUP'
  | 'SUHYEOP'
  | 'SANUP'
  | 'KBANK'
  | 'KAKAO'
  | 'TOSS';

type TBankType = {
  [key in TBankKey]: string;
};

interface IBankNumberType {
  [bank: string]: number;
}

export const BANKS: TBankType = {
  KB: 'KB국민은행',
  SHINHAN: '신한은행',
  WOORI: '우리은행',
  HANA: '하나은행',
  SC: 'SC제일은행',
  CITI: '씨티은행',
  GYEONGNAM: '경남은행',
  GWANGJU: '광주은행',
  DAEGU: '대구은행',
  BUSAN: '부산은행',
  JEONBUK: '전북은행',
  JEJU: '제주은행',
  KIUP: '기업은행',
  NONGHYUP: '농협',
  SUHYEOP: '수협',
  SANUP: '산업은행',
  KBANK: '케이비뱅크',
  KAKAO: '카카오뱅크',
  TOSS: '토스뱅크'
};

// export const BANKS: TBankType = {
//   KB국민은행: 'KB',
//   신한은행: 'SHINHAN',
//   우리은행: 'WOORI',
//   하나은행: 'HANA',
//   SC제일은행: 'SC',
//   씨티은행: 'CITI',
//   경남은행: 'GYEONGNAM',
//   광주은행: 'GWANGJU',
//   대구은행: 'DAEGU',
//   부산은행: 'BUSAN',
//   전북은행: 'JEONBUK',
//   제주은행: 'JEJU',
//   기업은행: 'KIUP',
//   농협: 'NONGHYUP',
//   수협: 'SUHYEOP',
//   산업은행: 'SANUP',
//   케이비뱅크: 'KBANK',
//   카카오뱅크: 'KAKAO',
//   토스뱅크: 'TOSS'
// };

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
