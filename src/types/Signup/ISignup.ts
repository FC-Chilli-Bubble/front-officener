export interface ISignup {
  agree: boolean;
  email: string;
  password: string;
  buildingName: string;
  officengName: string;
  name: string;
  phoneNumber: string;
}

export interface ICheckbox {
  agree: boolean;
}

export interface IBuildings {
  buildings: [
    {
      id: number;
      buildingName: string;
      buildingAddress: string;
      offices: [
        {
          id: number;
          officeName: string;
          officeNum: string;
        }
      ];
    }
  ];
}

export interface IAccount {
  email: string;
  password: string;
}

// export interface IVerifyCode {
//   code: string
// }

