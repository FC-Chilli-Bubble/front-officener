import styled from 'styled-components';

import IconUser from '@/assets/ico_user.svg';
import IconBlueCheck from '@/assets/chatrooms/ico_checkBlue.svg';
import IconGreenWon from '@/assets/chatrooms/ico_wonGreen.svg';
import { getName, isHost, isReceived, isRemitted } from '@/components/ChatRoom/ChatFunctions';
import { MODAL_DATA_HOST } from '@/constants/chatRoomModalData';
import { useModal } from '@/hooks/useModal';
import ChatProfileModal from '@/components/ChatRoom/ChatProfile/ChatProfileModal';

type TsenderId = {
  senderId: number;
};

const ChatProfile = ({ senderId }: TsenderId) => {
  const { openModal, closeModal } = useModal();
  const USER_ICON = IconUser;
  const BADGE_REMITTED = IconGreenWon;
  const BADGE_RECEIVED = IconBlueCheck;

  const myid = 1; //로그인시 받아오는 내 데이터 연동

  const handleClickProfileIcon = () => {
    const profileModalDataGuest = {
      content: <ChatProfileModal senderId={senderId} />,
      positive: '닫기'
    };
    const profileModalDataHost = {
      content: <ChatProfileModal senderId={senderId} />,
      positive: '강퇴하기',
      negative: '닫기'
    };
    const handleClickExile = () => {
      openModal({
        ...MODAL_DATA_HOST.exileExitModal,
        positiveCallback: () => {
          //api 호출
        },
        negativeCallback: () => {
          closeModal();
        }
      });
    };
    isHost(myid)
      ? openModal({
          ...profileModalDataHost,
          positiveCallback: () => {
            handleClickExile();
          },
          negativeCallback: () => {
            closeModal();
          }
        })
      : openModal({
          ...profileModalDataGuest,
          positiveCallback: () => {
            closeModal();
          }
        });
  };

  return (
    <StyledProfileCard>
      <StyledIcon onClick={handleClickProfileIcon}>
        <img
          src={USER_ICON}
          alt=""
        />
      </StyledIcon>
      <div>{getName(senderId)}</div>
      {isRemitted(senderId) && (
        <img
          src={BADGE_REMITTED}
          alt=""
        />
      )}
      {isReceived(senderId) && (
        <img
          src={BADGE_RECEIVED}
          alt=""
        />
      )}
    </StyledProfileCard>
  );
};
const StyledProfileCard = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  gap: 8px;
`;
const StyledIcon = styled.div`
  width: 46px;
  height: 46px;
  cursor: pointer;
`;
export default ChatProfile;
