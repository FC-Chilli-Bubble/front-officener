import styled from 'styled-components';
import IconUser from '@/assets/ico_user.svg';
import IconGreenWon from '@/assets/chatrooms/ico_wonGreen.svg';
import { getCompany, getName, isHost, isRemitted } from '@/components/ChatRoom/ChatFunctions';
import { MODAL_DATA_HOST } from '@/constants/chatRoomModalData';
import { useModal } from '@/hooks/useModal';
import { useSetRecoilState } from 'recoil';
import {
  declarationStepAtom,
  isDeclarationBottomsheetOpenAtom
} from '@/states/chatDeclarationAtom';

type TsenderId = {
  senderId: number;
};

const ChatProfile = ({ senderId }: TsenderId) => {
  const setIsBottomsheetOpen = useSetRecoilState(isDeclarationBottomsheetOpenAtom);
  const setDeclarationStep = useSetRecoilState(declarationStepAtom);
  const { openModal, closeModal } = useModal();
  const USER_ICON = IconUser;
  const BADGE_REMITTED = IconGreenWon;

  const myid = 1; //로그인시 받아오는 내 데이터 연동

  const handleDeclarationClick = () => {
    setDeclarationStep(1);
    closeModal();
    setIsBottomsheetOpen(true);
  };

  const modalProfile = () => {
    return (
      <StyledProfileModal>
        <StyledIcon>
          <img
            src={USER_ICON}
            alt=""
          />
        </StyledIcon>
        <div>
          <StyledNameWrap>
            <StyledName>{getName(senderId)}</StyledName>
            <StyledButton onClick={handleDeclarationClick}>신고</StyledButton>
          </StyledNameWrap>
          <div>{getCompany(senderId)}</div>
        </div>
      </StyledProfileModal>
    );
  };

  const handleClickProfileIcon = () => {
    const profileModalDataGuest = {
      content: modalProfile(),
      positive: '닫기'
    };
    const profileModalDataHost = {
      content: modalProfile(),
      positive: '강퇴하기',
      negative: '닫기'
    };
    const handleClickExile = () => {
      openModal({
        ...MODAL_DATA_HOST.exileExitModal,
        positiveCallback: () => {
          //api 호출
          console.log(getName(senderId), '강퇴');
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
    </StyledProfileCard>
  );
};
const StyledProfileCard = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  gap: 8px;
`;
const StyledProfileModal = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;
const StyledIcon = styled.div`
  width: 46px;
  height: 46px;
  cursor: pointer;
`;
const StyledNameWrap = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
  margin-bottom: 6px;
`;
const StyledName = styled.div`
  font-size: 20px;
`;
const StyledButton = styled.div`
  border: none;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grayColor6};
  cursor: pointer;
`;
export default ChatProfile;
