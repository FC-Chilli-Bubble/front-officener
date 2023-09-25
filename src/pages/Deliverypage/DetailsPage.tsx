import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { foodData, IFoodData } from './dummyData';
import Header from '@/components/Details/Header';
import FoodItem from '@/components/Details/FoodItem';
import PhotoCard from '@/components/Details/PhotoCard';
import HostInfo from '@/components/Details/HostInfo';
import FooterButtons from '@/components/Details/FooterButtons';
import MODAL_DATAS from '@/constants/modalDatas';
import { deleteDeliveryPost } from '@/apis/Delivery/deliveryPostRequests';
import { useModal } from '@/hooks/useModal';
import { IErrorResponse } from '@/types/Common/IErrorResponse';


// eslint-disable-next-line no-unused-vars
enum ButtonStates {
  // eslint-disable-next-line no-unused-vars
  JOIN_DELIVERY = '함께 배달',
  // eslint-disable-next-line no-unused-vars
  JOIN_CHAT = '채팅창 참여',
  // eslint-disable-next-line no-unused-vars
  ACTIONS = 'ACTIONS'
}

const DetailsPage = () => {
  const [data, setData] = useState<IFoodData | null>(null);
  const { openModal } = useModal();
  const navigate = useNavigate();

  // const [selectedCategory, setSelectedCategory] = useState('분식');
  const selectedCategoryState = useState('분식');
  const selectedCategory = selectedCategoryState[0];
  // const setSelectedCategory = selectedCategoryState[1];

  const [buttonState, setButtonState] = useState(ButtonStates.JOIN_DELIVERY);

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

  // 삭제 API
  const handleDeletePost = () => {
    deleteDeliveryPost(10).then(() => {
      navigate(-1);
    }, (error: IErrorResponse) => {
      openModal({
        ...MODAL_DATAS.DELIVERY_POST_DELETE_FAILURE,
        content: error.errorMessage[0] || '오류가 발생했습니다.',
      });
    });
  };

  // 삭제 버튼 클릭 핸들러
  const handleDeleteClick = () => {
    openModal({
      ...MODAL_DATAS.DELIVERY_POST_DELETE,
      positiveCallback: () => {
        handleDeletePost();
      }
    });
  };

  return (
    <>
      <Header leftIcon="back" />
      <StyledContainer>
        {data && <FoodItem food={data} />}
        {data && <PhotoCard food={data} />}
        <StyledDivider />
        <HostInfo />
      </StyledContainer>
      <FooterButtons
        buttonState={buttonState}
        handleButtonClick={handleButtonClick}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

const StyledContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
`;

const StyledDivider = styled.div`
  width: 100%;
  height: 11px;
  background-color: ${props => props.theme.colors.grayColor1};
`;

export default DetailsPage;
