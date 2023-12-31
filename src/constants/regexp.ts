// * user regex
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,16}$/;
export const USER_NAME_REGEX = /^[a-zA-Z가-힣0-9\s]{1,10}$/;

// * 휴대폰 인증 regex
export const PHONE_NUMBER_REGEX = /^01[016789]\d{7,8}$/;
export const VERIFICATION_CODE_REGEX = /^\d{6}$/;
