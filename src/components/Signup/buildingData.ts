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
        buildingName: '미왕빌딩',
        buildingAddress: '123 Main Street',
        offices: [
          {
            id: 1,
            officeName: '오피스A',
            officeNum: 'Room 101'
          },
          {
            id: 2,
            officeName: '오피스B',
            officeNum: 'Room 102'
          }
        ]
      },
      {
        id: 2,
        buildingName: '미왕왕',
        buildingAddress: '123 Main Street',
        offices: [
          {
            id: 1,
            officeName: '버블',
            officeNum: 'Room 101'
          },
          {
            id: 2,
            officeName: '버블버블',
            officeNum: 'Room 102'
          }
        ]
      },
      {
        id: 3,
        buildingName: '미왕',
        buildingAddress: '123 Main Street',
        offices: [
          {
            id: 1,
            officeName: '칠리',
            officeNum: 'Room 101'
          },
          {
            id: 2,
            officeName: '칠리칠리',
            officeNum: 'Room 102'
          }
        ]
      }
    ]
  }
};
