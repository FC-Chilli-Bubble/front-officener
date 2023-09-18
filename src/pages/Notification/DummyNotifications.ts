export type TDummyNotification = {
  type: string;
  message: string;
  date: string;
  read: boolean;
};

const DummyNotifications: TDummyNotification[] = [
  {
    type: '함께 배달',
    message: '홍길동님이 송금을 완료했어요! 호스트님 확인해 주세요.',
    date: '2023-09-14 14:50:00',
    read: false
  },
  {
    type: '함께 배달',
    message: '홍길순님이 송금을 완료했어요! 호스트님 확인해 주세요.',
    date: '2023-09-14 15:00:00',
    read: false
  },
  {
    type: '함께 배달',
    message: '홍길동님이 송금을 완료했어요! 호스트님 확인해 주세요.',
    date: '2023-09-14 14:30:00',
    read: true
  },
  {
    type: '함께 배달',
    message: '나길동님이 강퇴 요청을 했어요! 호스트님 확인해 주세요.',
    date: '2023-09-13 11:50:00',
    read: true
  },
  {
    type: '함께 배달',
    message: '김길동님이 송금을 완료했어요! 호스트님 확인해 주세요.',
    date: '2023-09-01 14:50:00',
    read: true
  }
];

export default DummyNotifications;
