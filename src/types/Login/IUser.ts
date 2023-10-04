interface IBuilding {
  id: number;
  buildingName: '';
  buildingAddress: '';
}

interface IOffice {
  id: number;
  officeName: string;
  officeNum: string;
}

export interface IUser {
  userInfo: {
    id: number;
    email: string;
    name: string;
    phoneNumber: string;
    building: IBuilding;
    office: IOffice;
    token: string;
  };
}
