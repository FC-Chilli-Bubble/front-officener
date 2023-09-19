export const foodData = {
  분식: [
    {
      사진: 'src/assets/food/Rectangle 487.svg',
      가게이름: '분식 천국1',
      참여인원: 3,
      배달비: '3,001원',
      태그: ['#분식'],
      이체해야하는시간: '18:01'
    },
    {
      사진: 'src/assets/food/Rectangle 487-3.svg',
      가게이름: '분식 천국2',
      참여인원: 3,
      배달비: '3,002원',
      태그: ['떡볶이', '튀김'],
      이체해야하는시간: '18:02'
    },
    {
      사진: 'src/assets/food/Rectangle 487-2.svg',
      가게이름: '분식 천국3',
      참여인원: 3,
      배달비: '3,003원',
      태그: ['떡볶이', '튀김'],
      이체해야하는시간: '18:03'
    }
    // ... (다른 분식 더미 데이터)
  ],
  '족발,보쌈': [
    {
      사진: 'src/assets/food/Rectangle 477-1.svg',
      가게이름: '족발 전설1',
      참여인원: 2,
      배달비: '4,001원',
      태그: ['족발', '보쌈'],
      이체해야하는시간: '19:01'
    },
    {
      사진: 'src/assets/food/Rectangle 487-2.svg',
      가게이름: '족발 전설2',
      참여인원: 2,
      배달비: '4,002원',
      태그: ['족발', '보쌈'],
      이체해야하는시간: '19:02'
    },
    {
      사진: 'src/assets/food/Rectangle 487.svg',
      가게이름: '족발 전설3',
      참여인원: 2,
      배달비: '4,003원',
      태그: ['족발', '보쌈'],
      이체해야하는시간: '19:03'
    }
    // ... (다른 족발, 보쌈 더미 데이터)
  ],
  '회,일식': [
    {
      사진: 'src/assets/food/Rectangle 487-2.svg',
      가게이름: '회1',
      참여인원: 4,
      배달비: '5,001원',
      태그: ['참치', '연어'],
      이체해야하는시간: '20:01'
    },
    {
      사진: 'src/assets/food/Rectangle 487.svg',
      가게이름: '회2',
      참여인원: 4,
      배달비: '5,002원',
      태그: ['참치', '연어'],
      이체해야하는시간: '20:02'
    },
    {
      사진: 'src/assets/food/Rectangle 487.svg',
      가게이름: '회3',
      참여인원: 4,
      배달비: '5,003원',
      태그: ['참치', '연어'],
      이체해야하는시간: '20:03'
    }
    // ... (다른 회, 일식 더미 데이터)
  ],
  '찜, 탕, 찌개': [
    {
      사진: 'src/assets/food/Rectangle 487-3.svg',
      가게이름: '찜1',
      참여인원: 4,
      배달비: '5,001원',
      태그: ['참치', '연어'],
      이체해야하는시간: '20:01'
    },
    {
      사진: 'src/assets/food/Rectangle 487.svg',
      가게이름: '탕2',
      참여인원: 4,
      배달비: '5,002원',
      태그: ['참치', '연어'],
      이체해야하는시간: '20:02'
    },
    {
      사진: 'src/assets/food/Rectangle 487.svg',
      가게이름: '찌개3',
      참여인원: 4,
      배달비: '5,003원',
      태그: ['참치', '연어'],
      이체해야하는시간: '20:03'
    }
    // ... (다른 회, 일식 더미 데이터)
  ]
};

interface IChatData {
  profileImage: string;
  name: string;
  message: string;
}

export const dummyChatData: IChatData[] = [
  {
    profileImage: 'src/assets/food/Rectangle 477-1.svg',
    name: '햄버거',
    message: '안녕하세요, 배달에 참여하고 싶습니다.'
  },
  {
    profileImage: 'src/assets/food/Rectangle 477.svg',
    name: 'User2',
    message: '주문 마감시간 언제인가요?'
  }
];
