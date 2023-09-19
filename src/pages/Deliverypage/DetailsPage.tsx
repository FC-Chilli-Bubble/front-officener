import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { foodData } from './dummyData';
import Header from '@/components/Details/Header';
import FoodItem from '@/components/Details/FoodItem';
import PhotoCard from '@/components/Details/PhotoCard';
import HostInfo from '@/components/Details/HostInfo';
import FooterButtons from '@/components/Details/FooterButtons';
import DeleteModal from '@/components/Details/DeleteModal';

interface IFoodData {
  사진?: string;
  가게이름: string;
  참여인원: number;
  배달비: string;
  태그: string[];
  이체해야하는시간: string;
}

enum ButtonStates {
  JOIN_DELIVERY = '함께 배달',
  JOIN_CHAT = '채팅창 참여',
  ACTIONS = 'ACTIONS'
}

// const DeleteModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
//   return (
//     <StyledModalOverlay>
//       <StyledModalContainer>
//         <h1>게시글을 정말 삭제하시겠습니까?</h1>
//         <p>게시글을 삭제하면 게스트와 소통이 불편해질 수 있어요</p>
//         <DeleteButton onClick={onClose}>삭제</DeleteButton>
//         <CancelButton onClick={onClose}>취소</CancelButton>
//       </StyledModalContainer>
//     </StyledModalOverlay>
//   );
// };

const DetailsPage = () => {
  const [data, setData] = useState<IFoodData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('분식');
  const [buttonState, setButtonState] = useState(ButtonStates.JOIN_DELIVERY);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  useEffect(() => {
    const dummyResponse = foodData[selectedCategory];

    if (dummyResponse && dummyResponse.length > 0) {
      setData(dummyResponse[0]);
    } else {
      console.error(`No data found for category: ${selectedCategory}`);
    }
  }, [selectedCategory]);

  const handleButtonClick = () => {
    switch (buttonState) {
      case ButtonStates.JOIN_DELIVERY:
        setButtonState(ButtonStates.JOIN_CHAT);
        break;
      case ButtonStates.JOIN_CHAT:
        setButtonState(ButtonStates.ACTIONS);
        break;
      case ButtonStates.ACTIONS:
        setButtonState(ButtonStates.JOIN_DELIVERY); // 초기 상태로 돌아가게 설정
        break;
    }
  };

  // 삭제 버튼 클릭 핸들러
  const handleDeleteClick = () => {
    setDeleteModalVisible(true);
  };

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setDeleteModalVisible(false);
  };

  return (
    <>
      <Header />
      <StyledContainer>
        <FoodItem food={data} />
        <PhotoCard food={data} />
        <StyledDivider />
        <HostInfo />
        <FooterButtons
          buttonState={buttonState}
          handleButtonClick={handleButtonClick}
          handleDeleteClick={handleDeleteClick}
        />
        {isDeleteModalVisible && <DeleteModal onClose={handleCloseModal} />}
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDivider = styled.div`
  width: 100%;
  margin: 15px 0 15px 0;
  height: 15px;
  background-color: ${props => props.theme.colors.grayColor1};
`;

// // 모달 스타일
// const StyledModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const StyledModalContainer = styled.div`
//   background-color: ${props => props.theme.colors.white};
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   width: 300px;
//   text-align: center;

//   h1 {
//     font-size: 16px;
//     font-weight: 500;
//     margin: 0;
//     padding: 10px 0;
//   }

//   p {
//     font-size: 12px;
//     font-weight: 500;
//     margin: 10px 0;
//     color: ${props => props.theme.colors.grayColor10};
//   }

//   button {
//     margin: 10px;
//     padding: 10px 20px;
//     border-radius: 5px;
//     width: 40%;
//     border: 1px solid ${props => props.theme.colors.marinblueColor};
//     cursor: pointer;
//     font-size: 16px;
//   }
// `;

// const DeleteButton = styled.button`
//   background-color: ${props => props.theme.colors.marinblueColor};
//   color: ${props => props.theme.colors.white};
// `;

// const CancelButton = styled.button`
//   background-color: ${props => props.theme.colors.white};
//   color: ${props => props.theme.colors.marinblueColor};
// `;

export default DetailsPage;
