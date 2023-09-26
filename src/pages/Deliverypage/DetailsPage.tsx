import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import { foodData, IFoodData } from './dummyData';
import Header from '@/components/Details/Header';
import MenuLinkCard from '@/components/Details/MenuLinkCard';
import HostInfo from '@/components/Details/HostInfo';
import FooterButtons from '@/components/Details/FooterButtons';
import StoreInfo from '@/components/Details/StoreInfo';
import MODAL_DATAS from '@/constants/modalDatas';
import { deleteDeliveryPost } from '@/apis/Delivery/deliveryPostRequests';
import { fetchDeliveryPostDetail } from '@/apis/Delivery/deliveryDetailRequests';
import { useModal } from '@/hooks/useModal';
import { IErrorResponse } from '@/types/Common/IErrorResponse';
import { IDeliveryPost } from '@/types/Delivery/IDeliveryPost';
import Button from '@/components/Common/Button';
import OutlineButton from '@/components/Common/OutlineButton';


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
  const { openModal } = useModal();
  const [detail, setDetail] = useState<IDeliveryPost | null>(null);
  const navigate = useNavigate();
  const params = useParams();


  // const [selectedCategory, setSelectedCategory] = useState('분식');
  const selectedCategoryState = useState('분식');
  const selectedCategory = selectedCategoryState[0];
  // const setSelectedCategory = selectedCategoryState[1];

  const [buttonState, setButtonState] = useState(ButtonStates.JOIN_DELIVERY);

  // 게시글 상세 조회 API
  const getDeliveryPostDetail = async (roomId: string) => {
    try {
      const res = await fetchDeliveryPostDetail(roomId);
      setDetail(res.data);
    } catch (error) {
      console.log((error as IErrorResponse).errorMessage);
    }
  };

  useEffect(() => {
    if (params.id) {
      getDeliveryPostDetail(params.id);
    }
  }, [params]);

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
        {
          detail && (
            <>
              <StoreInfo detail={detail} />
              <MenuLinkCard menuLink={detail.menuLink} storeName={detail.storeName} />
            </>
          )
        }
        <StyledDivider />
        <HostInfo />
      </StyledContainer>
      <StyledButtonBox>
        {

          (
            <StyledHostButtons>
              <OutlineButton size='small' title='수정' onClick={handleButtonClick} width='fit-content' />
              <OutlineButton size='small' title='삭제' onClick={handleButtonClick} width='fit-content' />
              <Button size='small' type='cta' title='채팅방 참여' onClick={handleButtonClick} width='fit-content' />
            </StyledHostButtons>
          )
        }
      </StyledButtonBox>
      {/* <FooterButtons
        buttonState={buttonState}
        handleButtonClick={handleButtonClick}
        handleDeleteClick={handleDeleteClick}
      /> */}
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

const StyledButtonBox = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.1);
  height: 100px;
  bottom: 0;
  padding: 21px;
  z-index: 100;
  position: absolute;
`;

const StyledHostButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  :last-child {
    flex-grow: 1;
  }
`;

export default DetailsPage;
