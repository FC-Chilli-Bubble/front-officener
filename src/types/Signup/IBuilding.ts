export interface IOffice {
  id: number;
  officeName: string;
  officeNum: string;
}

export interface IBuildings {
  id: number;
  buildingName: string;
  buildingAddress: string;
  offices: IOffice[];
}


export interface IBuilding {
  buildings: IBuildings[];
}
