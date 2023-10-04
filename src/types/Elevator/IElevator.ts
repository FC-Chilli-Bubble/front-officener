export interface IObjectElevator {
  id: number; // 엘리베이터 ID
  floor: number | null; // 엘리베이터 층수
  direction: 'stop' | 'UP' | 'DOWN' | null; // 엘리베이터 방향
  status: 'NORMAL' | 'REPAIR' | 'full'; // 엘리베이터 상태
}

export interface IElevator {
  allElevators: IObjectElevator[];
  userElevators: IObjectElevator[];
}
