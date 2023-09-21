// 임시 데이터 배열

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

interface IData {
  data: {
    buildings: IBuilding[];
  };
}

export const buildingData: IData = {
  data: {
    buildings: [
      {
        id: 1,
        buildingName: '미왕 X',
        buildingAddress: '123 Main Street',
        offices: [
          {
            id: 1,
            officeName: '오피스 A',
            officeNum: 'Room 101'
          },
          {
            id: 2,
            officeName: '회사 B',
            officeNum: 'Room 102'
          }
        ]
      },
      {
        id: 2,
        buildingName: '마왕 Y',
        buildingAddress: '123 Main Street',
        offices: [
          {
            id: 1,
            officeName: '칠리버블',
            officeNum: 'Room 101'
          },
          {
            id: 2,
            officeName: '칠리버블버블',
            officeNum: 'Room 102'
          }
        ]
      }
    ]
  }
};

