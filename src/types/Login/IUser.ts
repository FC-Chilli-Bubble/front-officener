interface IBuilding {
  id: 0;
  buildingName: '';
  buildingAddress: '';
}

interface Company {
  officeId: number;
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
    company: Company;
    token: string;
  };
}
