interface IOffice {
  id: number;
  officeName: string;
  officeNum: string;
}

export interface IBuilding {
  id: number;
  buildingName: string;
  buildingAddress: string;
  offices: IOffice[];
}
