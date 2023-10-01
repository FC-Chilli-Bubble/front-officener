export interface ISignup {
  agree: boolean;
  email: string;
  password: string;
  buildingName: string;
  officenName: string;
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

