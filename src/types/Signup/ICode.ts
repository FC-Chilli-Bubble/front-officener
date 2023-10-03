export interface AutheReq {
  name: string;
  phoneNumber: string;
}

export interface AutheRes {
  verifyCode: string;
}

export interface IVerifyCode {
  phoneNumber: string;
  verifyCode: string;
}

// export interface IVerifyCodeRes {
//   data: string;
// }
