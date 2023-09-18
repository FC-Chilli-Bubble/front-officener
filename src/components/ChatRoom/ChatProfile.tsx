import styled from 'styled-components';
import IconUser from '@/assets/ico_user.svg';
import IconGreenWon from '@/assets/chatrooms/ico_wonGreen.svg';
import { getName, isRemitted } from './ChatFunctions';
import { useModal } from '@/hooks/useModal';

type TsenderId = {
  senderId: number;
};

const ChatProfile = ({ senderId }: TsenderId) => {
  const { openModal, closeModal } = useModal();
  const USER_ICON = IconUser;
  const BADGE_REMITTED = IconGreenWon;

  const handleClickProfileIcon = () => {
    const profileModalData = {
      content: getName(senderId),
      positive: '닫기'
    };
    openModal({
      ...profileModalData,
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
