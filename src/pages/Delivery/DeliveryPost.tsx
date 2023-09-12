
import { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "@/components/Common/Header";
import Button from "@/components/Common/Button";
import FormField from "@/components/Common/FormField";
import BottomSheetModal from "@/components/Common/BottomSheetModal";
import MODAL_DATAS from "@/constants/modalDatas";
import { useModal } from "@/hooks/useModal";
import OutlineButton from "@/components/Common/OutlineButton";
import { useNavigate } from "react-router";
import TagList from "@/components/Delivery/TagList";
import { useRecoilState } from "recoil";
import { postTagAtom } from "@/states/postTagAtom";

const PostTitles = { 1: '가게정보 입력', 2: '기본정보 입력' };

const PostButtonTitle = { 1: '다음', 2: '함께배달 올리기' };

const DeliveryPost = () => {
  const { openModal } = useModal();
  const [stepNum, setStepNum] = useState<1 | 2>(1);
  const [isValid, setIsValid] = useState(false);
  const [storeName, setStoreName] = useState('');
  const [storeLink, setStoreLink] = useState('');
  const [deliveryTip, setDeliveryTip] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [savedTag] = useRecoilState(postTagAtom);

  const navigate = useNavigate();

  // const handleModalOpen = () => {
  //   // 페이지에 띄운 모달정보를 openModal함수의 파라미터로 전달
  //   openModal({
  //     ...MODAL_DATAS.testModal,
  //     positiveCallback: () => {
  //       console.log("모달 나가기 클릭 콜백");
  //     }
  //   });
  // };

  const handleClickButton = () => {
    if (stepNum === 1) {
      setStepNum(2);
      return;
    }
  };

  const handleClickTagSelect = () => {
    setOpen(true);
  };

  // x 버튼 뒤로가기
  const handleClickClose = () => {
    navigate(-1);
  };

  // 입력사항 유효성 검사
  useEffect(() => {
    if (stepNum === 1) {
      setIsValid(storeName !== '' && storeLink !== '' && deliveryTip !== '' && savedTag !== null);
      return;
    }
  }, [stepNum, storeName, storeLink, deliveryTip, savedTag]);

  // 바텀시트 닫기
  const closeBottomSheet = () => {
    setOpen(false);
  };

  return (
    <>
      <Header leftIcon="close" title={PostTitles[stepNum]} leftIconClick={handleClickClose} />

      <StyledContainer>
        <FormField
          isType="text"
          label='가게이름'
          isRequired
          placeholder='가게이름을 작성해주세요'
          isValid={storeName !== ''}
          value={storeName}
          onChange={(value) => setStoreName(value)}
        />

        <FormField
          isType="text"
          label='메뉴판 링크'
          isRequired
          placeholder='가게링크를 복사해주세요'
          isValid={storeLink !== ''}
          value={storeLink}
          onChange={(value) => setStoreLink(value)}
        />

        <FormField
          isType="number"
          label='배달비'
          isRequired
          placeholder='배달비를 작성해주세요'
          isValid={deliveryTip !== ''}
          value={deliveryTip}
          onChange={(value) => setDeliveryTip(value)}
        />

        <StyledTagBox>
          <StyledLabel htmlFor="input-box">
            태그
            <span>*</span>
          </StyledLabel>
          {
            savedTag ? <div>{savedTag}</div> : (<OutlineButton title="태그선택" size="small" width="fit-content" onClick={handleClickTagSelect} />)
          }

        </StyledTagBox>
      </StyledContainer>

      <StyledButtonBox>
        <Button title={PostButtonTitle[stepNum]} onClick={handleClickButton} disabled={!isValid} />
      </StyledButtonBox>

      <BottomSheetModal isOpen={isOpen} onClose={closeBottomSheet}>
        <TagList closeSheet={closeBottomSheet} />
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
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.grayColor5};
  line-height: normal;

  span {
    color: ${({ theme }) => theme.colors.redColor0};
    margin-left: 5px;
  }
`;

const StyledTagBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

`;

const StyledButtonBox = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.10);
  height: 100px;
  bottom: 0;
  padding: 21px;
  z-index: 100;
  position: absolute;
`;

export default DeliveryPost;