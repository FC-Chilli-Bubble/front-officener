export interface ISignup {
  agree: boolean;
  email: string;
  password: string;
  buildingName: string;
  companyName: string; // officeName으로 수정 필요
  name: string;
  phoneNumber: string;
}

export interface IResident {
  buildingName: string;
  officeName: string;
}

export interface IAccount {
  email: string;
  password: string;
}
export interface IInfo {
  name: string;
  phoneNumber: string;
}
