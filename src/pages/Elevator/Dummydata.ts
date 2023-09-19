export const DummyElevators: IObjectElevators[] = [
  {
    elevatorId: 1, // 엘리베이터 호기
    floor: 21, // 엘리베이터 위치 층
    direction: 'up', // or "down"
    status: 'full' // ,"repair", "full"
  },
  {
    elevatorId: 3, // 엘리베이터 호기
    floor: null, // 엘리베이터 위치 층
    direction: null, // or "up"
    status: 'repair' // or "repair", "normal"
  },
  {
    elevatorId: 11, // 엘리베이터 호기
    floor: 7, // 엘리베이터 위치 층
    direction: 'down', // or "down"
    status: 'normal' // or "repair", "normal"
  },
  {
    elevatorId: 4, // 엘리베이터 호기
    floor: 13, // 엘리베이터 위치 층
    direction: 'stop', // or "up"
    status: 'normal' // or "repair", "full"
  }
];

interface IObjectElevators {
  elevatorId: number;
  floor: number | null;
  direction: 'stop' | 'up' | 'down' | null;
  status: 'normal' | 'repair' | 'full';
}
