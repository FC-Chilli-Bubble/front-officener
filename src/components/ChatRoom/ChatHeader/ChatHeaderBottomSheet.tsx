import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import BottomSheetModal from '@/components/Common/BottomSheetModal';
import { MODAL_DATA_GUEST, MODAL_DATA_HOST } from '@/constants/chatRoomModalData';
import { isBottomsheetOpenAtom } from '@/states/chatBottomSheetAtom';
import { useModal } from '@/hooks/useModal';
import { useMemberInfo } from '@/hooks/useMemberInfo';

const ChatHeaderBottomSheet = () => {
  const { openModal, closeModal } = useModal();
  const { isHost } = useMemberInfo();

  const [isBottomsheetOpen, setIsBottomsheetOpen] = useRecoilState(isBottomsheetOpenAtom);
  const myid = 1; //로그인시 데이터 내려받아 사용
  const amIHost = isHost(myid);

  const closeBottomSheet = () => {
    setIsBottomsheetOpen(false);
  };

  //호스트임, 익짓

  //2차모달
  //호스트임 , 수령완료되지 않음 -> 캔익짓
  // 호스트임, 수령완료 -> 나가기 api

  // 게스트임, 익짓요청
  /// 게스트임, 모두 수령완료 -> 애프터익짓

  // 2차모달
  // 게스트임 , 본인 수령완료 -> 캔익짓

  //   const handleClickModalExit = () => {
  //     amIHost && !수령완료
  //     ? openModal({
  //         ...MODAL_DATA_HOST.cantExitModal,
  //         positiveCallback: () => {
  //           //api
  //         },
  //         negativeCallback: () => {
  //           closeModal();
  //         }
  //       })
  // : openModal({
  //     ...MODAL_DATA_GUEST.cantExitModal,
  //     positiveCallback: () => {
  //     //api
  //     },
  //     negativeCallback: () => {
  //     closeModal();
  //     }
  // });
  //   };

  const handleClickExit = () => {
    amIHost
      ? openModal({
          ...MODAL_DATA_HOST.exitModal,
          positiveCallback: () => {
            //api
          },
          negativeCallback: () => {
            closeModal();
          }
        })
      : openModal({
          ...MODAL_DATA_GUEST.exitModal,
          positiveCallback: () => {
            //api
          },
          negativeCallback: () => {
            closeModal();
          }
        });
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
