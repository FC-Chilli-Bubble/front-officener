// * user regex
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,16}$/;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,15}$/;
// 비밀번호는 최소 8자 이상 15자 이하, 대문자, 소문자, 숫자, 특수 문자($@$!%*?&)를 포함해야 합니다
export const USER_NAME_REGEX = /^[a-zA-Z가-힣0-9\s]{1,10}$/;

// * 휴대폰 인증 regex
export const PHONE_NUMBER_REGEX = /^01[016789]\d{7,8}$/;
export const VERIFICATION_CODE_REGEX = /^\d{6}$/;
