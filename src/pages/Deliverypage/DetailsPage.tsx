import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';


import Header from '@/components/Details/Header';
import MenuLinkCard from '@/components/Details/MenuLinkCard';
import HostInfo from '@/components/Details/HostInfo';
import StoreInfo from '@/components/Details/StoreInfo';
import MODAL_DATAS from '@/constants/modalDatas';
import { deleteDeliveryPost } from '@/apis/Delivery/deliveryPostRequests';
import { fetchDeliveryPostDetail } from '@/apis/Delivery/deliveryDetailRequests';
import { useModal } from '@/hooks/useModal';
import { IErrorResponse } from '@/types/Common/IErrorResponse';
import { IDeliveryPost } from '@/types/Delivery/IDeliveryPost';
import Button from '@/components/Common/Button';
import OutlineButton from '@/components/Common/OutlineButton';
import { userInfoAtom } from '@/states/userDataAtom';


const DetailsPage = () => {
  const userInfo = useRecoilValue(userInfoAtom);
  const { openModal } = useModal();
  const [detail, setDetail] = useState<IDeliveryPost | null>(null);
  const navigate = useNavigate();
  const params = useParams();

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

  // 수정 버튼 클릭 핸들러
  const handleClickEdit = () => {
    navigate(`/delivery/post`, { state: { id: params.id, detail: detail } });
  };

  // 채팅방 참여 클릭 핸들러
  const handleClickEnterChat = () => {
    // TODO : 채팅방으로 이동
  };

  // 함께배달 클릭 핸들러
  const handleClickJoinRoom = () => {
    // TODO : 배달 참여 API 연동
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
              <StyledDivider />
              <HostInfo userName={detail.hostName} bank={detail.bankName} account={detail.account} desc={detail.description} />
            </>
          )
        }
      </StyledContainer>
      <StyledButtonBox>
        {
          detail?.hostId === userInfo.userInfo.id ?
            (
              <StyledHostButtons>
                <OutlineButton size='small' title='수정' onClick={handleClickEdit} width='fit-content' />
                <OutlineButton size='small' title='삭제' onClick={handleDeleteClick} width='fit-content' />
                <Button size='small' type='cta' title='채팅방 참여' onClick={handleClickEnterChat} width='fit-content' />
              </StyledHostButtons>
            )
            : detail?.isJoin ? (
              <Button type='cta' title='채팅방 참여' onClick={handleClickEnterChat} />
            ) : <Button type='cta' title='함께배달' onClick={handleClickJoinRoom} />
        }
      </StyledButtonBox>
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
