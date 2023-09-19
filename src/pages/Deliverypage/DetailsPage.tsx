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

export default DetailsPage;
