import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';

import IconUser from '@/assets/ico_user.svg';
import { getCompany, getName } from '@/components/ChatRoom/ChatFunctions';
import {
  chatDeclarationDataAtom,
  declarationStepAtom,
  isDeclarationBottomsheetOpenAtom
} from '@/states/chatDeclarationAtom';
import { useModal } from '@/hooks/useModal';

type TSenderId = {
  senderId: number;
};

const ChatProfileModal = ({ senderId }: TSenderId) => {
  const { closeModal } = useModal();

  const [chatDeclarationData, setChatDeclarationData] = useRecoilState(chatDeclarationDataAtom);
  const setIsBottomsheetOpen = useSetRecoilState(isDeclarationBottomsheetOpenAtom);
  const setDeclarationStep = useSetRecoilState(declarationStepAtom);

  const USER_ICON = IconUser;

  const handleDeclarationClick = () => {
    setDeclarationStep(1);
    closeModal();
    setChatDeclarationData({ ...chatDeclarationData, reportedUserId: senderId });
    setIsBottomsheetOpen(true);
  };

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

export default ChatProfileModal;
