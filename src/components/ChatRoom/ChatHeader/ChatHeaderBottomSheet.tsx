import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import BottomSheetModal from '@/components/Common/BottomSheetModal';
import { MODAL_DATA_GUEST, MODAL_DATA_HOST } from '@/constants/chatRoomModalData';
import { isBottomsheetOpenAtom } from '@/states/chatBottomSheetAtom';
import { useModal } from '@/hooks/useModal';
import { useMemberInfo } from '@/hooks/useMemberInfo';

const ChatHeaderBottomSheet = () => {
  const { openModal, closeModal } = useModal();
  const { isHost, getMyId, isAllReceived } = useMemberInfo();

  const [isBottomsheetOpen, setIsBottomsheetOpen] = useRecoilState(isBottomsheetOpenAtom);
  const myid = getMyId();
  const amIHost = isHost(myid);

  const closeBottomSheet = () => {
    setIsBottomsheetOpen(false);
  };

    const handleClickModalExitHost = () => {
      if (isAllReceived()) {
        //나가기 api 
      } else {
        openModal({
        ...MODAL_DATA_HOST.cantExitModal,
        positiveCallback: () => {
        //api
        },
        negativeCallback: () => {
        closeModal();
        }
      })
    }
  };

  const handleClickModalExitGuest = () => {
    if (isAllReceived()) {
      openModal({
        ...MODAL_DATA_GUEST.afterExitModal,
        positiveCallback: () => {
        //api
        },
        negativeCallback: () => {
        closeModal();
        }
      })
    } else {
      openModal({
        ...MODAL_DATA_GUEST.exitModal,
        positiveCallback: () => {
          //api
        },
        negativeCallback: () => {
          closeModal();
        }
      })
    } 
  };

  const handleClickExit = () => {
    amIHost
      ? openModal({
          ...MODAL_DATA_HOST.exitModal,
          positiveCallback: () => {
            handleClickModalExitHost();
          },
          negativeCallback: () => {
            closeModal();
          }
        })
      : handleClickModalExitGuest()
  };

  return (
    <BottomSheetModal
      isOpen={isBottomsheetOpen}
      onClose={closeBottomSheet}>
      {
        <StyledSheetContainer>
          <StyledCancelButton onClick={closeBottomSheet}>취소</StyledCancelButton>
          <StyledSheetBox>알림끄기</StyledSheetBox>
          <StyledSheetBox onClick={() => handleClickExit}>채팅방 나가기</StyledSheetBox>
        </StyledSheetContainer>
      }
    </BottomSheetModal>
  );
};
const StyledSheetContainer = styled.div`
  position: relative;
  padding: 34px 16px 9px 16px;
`;
const StyledCancelButton = styled.div`
  position: absolute;
  right: 27px;
  top: 7px;
  color: ${({ theme }) => theme.colors.grayColor11};
  cursor: pointer;
`;
const StyledSheetBox = styled.div`
  text-align: center;
  padding: 16px 15px;
  cursor: pointer;

  &:nth-child(2) {
    border-bottom: 0.3px solid ${({ theme }) => theme.colors.barBorderColor};
  }
`;

export default ChatHeaderBottomSheet;
