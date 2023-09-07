import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { getFoodDetails } from '@/apis/foodApi';
import { foodData } from './dummyData';

// Styled Components for Styling
const Container = styled.div`
    font-family: 'Arial', sans-serif;
    padding: 20px;
`;

// 상단 탭 스타일
const TopMenuButton = styled.button`
    position: relative; // relative positioning을 추가하여 가상 요소의 위치를 조절합니다.
    padding: 10px 20px;
    margin: 0 5px;
    border: none;
    background-color: ${props => props.theme.colors.white};
    cursor: pointer;
    color: ${props => props.theme.colors.grayColor5};

    &.active {
        color: ${props => props.theme.colors.marinblueColor};

        &:after {
            content: ''; 
            position: absolute;
            bottom: 0; 
            left: 50%; 
            transform: translateX(-50%); 
            width: 48px; 
            height: 4px; 
            background-color: ${props => props.theme.colors.marinblueColor};
            border-radius: 5px; // 모서리를 둥글게 만듭니다.
        }
    }
`;


// 하단 탭 스타일
const CategoryButton = styled.button`
    padding: 10px 20px;
    margin: 0 5px;
    border: none;
    background-color: ${props => props.theme.colors.marinblueColor}; // 파란 배경
    cursor: pointer;
    color: ${props => props.theme.colors.white}; // 흰 글씨
    border-radius: 8px; // 모서리 둥글게
    opacity: 0.6; // 기본 반투명
    &:hover {
        opacity: 0.8; // 호버 시 조금 덜 투명
    }
    &.active {
        opacity: 1; // 활성화된 탭은 완전 불투명
    }
`;


interface FoodData {
  사진?: string;
  가게이름: string;
  참여인원: number;
  배달비: string;
  태그: string[];
  이체해야하는시간: string;
}

type FoodCategory = "분식" | "족발,보쌈" | "회,일식";

interface FoodDetailsProps {
  category: FoodCategory;
  
}

// Component to fetch and display food details
function FoodDetails({ category }: FoodDetailsProps) {
  const [data, setData] = useState<FoodData | null>(null);

  useEffect(() => {
    // 더미 데이터에서 해당 카테고리의 정보를 가져옵니다.
    const dummyResponse = foodData[category];

    if (dummyResponse && dummyResponse.length > 0) {
        // 첫 번째 아이템을 기본으로 설정합니다. (변경 가능)
        setData(dummyResponse[0]);
    } else {
        // 원하는 에러 처리나 기본 값을 설정할 수 있습니다.
        console.error(`No data found for category: ${category}`);
    }
}, [category]);

if (!data) return <div>Loading...</div>;

  return (
      <div>
          {/* <img src={data?.사진} alt="음식 사진" /> */}
          <h1>{data?.가게이름}</h1>
          <p>참여 인원: {data?.참여인원}</p>
          <p>배달비: {data?.배달비}</p>
          <p>태그: {data?.태그.join(', ')}</p> 
          <p>이체 마감 시간: {data?.이체해야하는시간}</p>
      </div>
  );
}

//     function FoodDetails({ category }) {
//       const [data, setData] = useState(null);
  
//       useEffect(() => {
//           (async () => {
//               try {
//                   const foodData = await getFoodDetails(category);
//                   setData(foodData);
//               } catch (error) {
//                   console.error("API 호출 중 에러 발생:", error);
//               }
//           })();
//       }, [category]);
  
//       if (!data) return <div>Loading...</div>;

//     return (
//         <div>
//             <h1>가게이름</h1>
//             <p>참여 인원:</p>
//             <p>배달비: </p>
//             <p>태그: </p> 
//             <p>이체 마감 시간: </p>
//         </div>
//     );
// }

// Main App Component
function App() {
    const [selectedMenu, setSelectedMenu] = useState('함께배달');
    const [selectedCategory, setSelectedCategory] = useState('분식');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <Container>
            <div>
                <TopMenuButton className={selectedMenu === '함께배달' ? 'active' : ''} onClick={() => handleMenuClick('함께배달')}>함께배달</TopMenuButton>
                <TopMenuButton className={selectedMenu === '내가 참여한 배달' ? 'active' : ''} onClick={() => handleMenuClick('내가 참여한 배달')}>내가 참여한 배달</TopMenuButton>
                <TopMenuButton className={selectedMenu === '나의 채팅' ? 'active' : ''} onClick={() => handleMenuClick('나의 채팅')}>나의 채팅</TopMenuButton>
            </div>
            {selectedMenu === '함께배달' && (

                <div>
                  <div style={{ padding: '30px 0 300px 0' }}>
                    함께 배달 
                    곧 마감이에요!
                  </div>
                  <h2>함께 주문 리스트</h2>
                    <div>
                        <CategoryButton className={selectedCategory === '분식' ? 'active' : ''} onClick={() => handleCategoryClick('분식')}>분식</CategoryButton>
                        <CategoryButton className={selectedCategory === '족발,보쌈' ? 'active' : ''} onClick={() => handleCategoryClick('족발,보쌈')}>족발, 보쌈</CategoryButton>
                        <CategoryButton className={selectedCategory === '회, 일식' ? 'active' : ''} onClick={() => handleCategoryClick('회,일식')}>회, 일식</CategoryButton>
                    </div>
                    <FoodDetails category={selectedCategory}/>
                </div>
            )}

            {selectedMenu === '내가 참여한 배달' && <div>내가 참여한 배달 내용</div>}
            {selectedMenu === '나의 채팅' && <div>나의 채팅 내용</div>}
        </Container>
    );
}

export default App;
