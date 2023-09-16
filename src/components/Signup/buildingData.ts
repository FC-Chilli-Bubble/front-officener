// 임시 데이터 배열

interface IOffice {
  id: number;
  office: string;
  officeNum: string;
}

interface IBuilding {
  id: number;
  buildingName: string;
  buildingAddress: string;
  office: IOffice[];
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
        buildingName: 'Building X',
        buildingAddress: '123 Main Street',
        office: [
          {
            id: 1,
            office: 'Office A',
            officeNum: 'Room 101'
          },
          {
            id: 2,
            office: 'Office B',
            officeNum: 'Room 102'
          }
        ]
      },
      {
        id: 2,
        buildingName: 'Building Y',
        buildingAddress: '123 Main Street',
        office: [
          {
            id: 1,
            office: '칠리버블',
            officeNum: 'Room 101'
          },
          {
            id: 2,
            office: '칠리버블버블',
            officeNum: 'Room 102'
          }
        ]
      }
    ]
  }
};

