import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import dayjs from 'dayjs';

import Header from '@/components/Common/Header';
import Button from '@/components/Common/Button';
import TagList from '@/components/Delivery/TagList';
import TimePicker from '@/components/Delivery/TimePicker';
import BottomSheetModal from '@/components/Common/BottomSheetModal';
import PostStepStoreInfo from '@/components/Delivery/PostStepStoreInfo';
import PostStepDeliveryInfo from '@/components/Delivery/PostStepDeliveryInfo';
import MODAL_DATAS from '@/constants/modalDatas';
import { useModal } from '@/hooks/useModal';
import { postAtom, postBankAtom } from '@/states/postAtom';
import { postTagAtom } from '@/states/postTagAtom';
import { IErrorResponse } from '@/types/Common/IErrorResponse';
import { createDeliveryPost, fetchBankList, updateDeliveryPost } from '@/apis/Delivery/deliveryPostRequests';
import { timePickerAtom } from '@/states/timePickerAtom';
import { FOODTAGS } from '@/constants/commonUiData';
import { IDeliveryPost } from '@/types/Delivery/IDeliveryPost';


const PostTitles = { 1: '가게정보 입력', 2: '기본정보 입력' };
const PostButtonTitle = { 1: '다음', 2: '함께배달 올리기' };

const DeliveryPost = () => {
  const { openModal } = useModal();
  const [stepNum, setStepNum] = useState<1 | 2>(1);
  const [isValid, setIsValid] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [postData, setPostData] = useRecoilState(postAtom);
  const setBankList = useSetRecoilState(postBankAtom);
  const setSavedTag = useSetRecoilState(postTagAtom);
  const setSavedTime = useSetRecoilState(timePickerAtom);
  const resetPostData = useResetRecoilState(postAtom);

  const navigate = useNavigate();
  const location = useLocation();
  const postDetail = location.state;

  useEffect(() => {
    if (!postDetail) {
      return;
    }
    const detail: IDeliveryPost = postDetail.detail;
    // 상세페이지로 부터 넘어온 데이터를 postData recoil state로 가공
    setIsEdit(true);
    // Test 수정 데이터
    setPostData({
      storeName: detail.storeName,
      menuLink: detail.menuLink,
      deliveryFee: detail.deliveryFee,
      bankName: detail.bankName,
      foodTag: detail.tag,
      accountNumber: detail.account,
      deadline: detail.deadline,
      maxAttendees: detail.maxAttendees,
      desc: detail.description
    });
    setSavedTag(Object.keys(FOODTAGS).find(key => FOODTAGS[key] === detail.tag) ?? '');
    setSavedTime({
      time: dayjs(detail.deadline).format('A'),
      houres: dayjs(detail.deadline).format('hh'),
      minutes: dayjs(detail.deadline).format('mm')
    });
  }, [postDetail, setPostData, setSavedTag, setSavedTime]);

  // 은행 목록 조회 api
  const getBankList = () => {
    fetchBankList().then(
      res => {
        setBankList(res.data.banks);
      },
      (error: IErrorResponse) => {
        openModal({
          ...MODAL_DATAS.DELIVERY_POST_BANK_FAILURE,
          content: error.errorMessage[0] || '오류가 발생했습니다.',
          positiveCallback: () => {
            clearState();
          }
        });
      }
    );
  };

  useEffect(() => {
    getBankList();
  }, []);

  // recoilState reset
  const clearState = () => {
    setSavedTag('');
    setSavedTime({ time: '', houres: '', minutes: '' });
    resetPostData();
    navigate(-1);
  };

  // 함께배달 등록
  const createNewPost = () => {
    createDeliveryPost(postData).then(
      () => {
        openModal({
          ...MODAL_DATAS.DELIVERY_POST_SUCCESS, positiveCallback: () => {
            clearState();
          }
        });
      },
      () => {
        openModal(MODAL_DATAS.DELIVERY_POST_FAILURE);
      }
    );
  };


  // 수정 API 호출
  const handleEditPost = () => {
    updateDeliveryPost(11, postData).then(
      () => {
        openModal({
          ...MODAL_DATAS.DELIVERY_POST_EDIT_SUCCESS, positiveCallback: () => {
            clearState();
          }
        });
      }, () => {
        openModal(MODAL_DATAS.DELIVERY_POST_EDIT_FAILURE);
      }
    );
  };

  const handleClickButton = () => {
    if (stepNum === 1) {
      setStepNum(2);
      return;
    }
    // 새로 등록
    if (!isEdit) {
      createNewPost();
      return;
    }

    // 수정
    openModal({
      ...MODAL_DATAS.DELIVERY_POST_EDIT_CONFIRM,
      positiveCallback: () => {
        handleEditPost();
      }
    });
  };

  // x 버튼 뒤로가기
  const handleClickClose = () => {
    openModal({
      ...MODAL_DATAS.WARN_NOT_SAVED,
      positiveCallback: () => {
        clearState();
      }
    });
  };

  // 입력사항 유효성 검사
  useEffect(() => {
    if (stepNum === 1) {
      setIsValid(
        postData.storeName !== '' &&
        postData.menuLink !== '' &&
        (postData.foodTag ?? '') !== '' &&
        (postData.deliveryFee ? postData.deliveryFee : '').toString() !== ''
      );
      return;
    }
    setIsValid(
      postData.bankName !== '' &&
      postData.accountNumber !== '' &&
      postData.deadline !== '' &&
      (postData.maxAttendees ? postData.maxAttendees : '').toString() !== ''
    );
  }, [postData, stepNum]);

  // 바텀시트 닫기
  const closeBottomSheet = () => {
    setOpen(false);
  };

  const handleOpenBottomSheet = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setOpen(false);
  };

  return (
    <>
      <Header
        leftIcon="close"
        title={PostTitles[stepNum]}
        leftIconClick={handleClickClose}
      />

      <StyledContainer onClick={handleCloseBottomSheet}>
        {stepNum === 1 ? (
          <PostStepStoreInfo openBottomSheet={handleOpenBottomSheet} isEdit={isEdit} />
        ) : (
          <PostStepDeliveryInfo openBottomSheet={handleOpenBottomSheet} isEdit={isEdit} />
        )}
      </StyledContainer>

      <StyledButtonBox>
        <Button
          title={PostButtonTitle[stepNum]}
          onClick={handleClickButton}
          disabled={!isValid}
        />
      </StyledButtonBox>

      <BottomSheetModal
        isOpen={isOpen}
        onClose={closeBottomSheet}>
        {stepNum === 1 ? (
          <TagList closeSheet={closeBottomSheet} />
        ) : (
          <TimePicker closeSheet={closeBottomSheet} />
        )}
      </BottomSheetModal>
    </>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  input,
  textarea {
    outline: none;
    font-size: 16px;
    margin-top: 8px;
    width: 100%;
    padding: 13px 24px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.grayColor3};

    ::placeholder {
      color: ${({ theme }) => theme.colors.grayColor3};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.marinblueColor};
    }
  }
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

export default DeliveryPost;
