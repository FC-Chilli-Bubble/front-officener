import ChatBubble from '@/components/ChatRoom/ChatBubble';
import ChatDeclarationBotomSheet from '@/components/ChatRoom/ChatDeclarationBotomSheet';
import ChatHeader from '@/components/ChatRoom/ChatHeader';
import ChatInput from '@/components/ChatRoom/ChatInput';
import BottomSheetModal from '@/components/Common/BottomSheetModal';
import Header from '@/components/Common/Header';
import { useState } from 'react';
import { styled } from 'styled-components';

const ChatRoom = () => {
  const [isBottomsheetOpen, setIsBottomsheetOpen] = useState(false);

  const handleRightIconClick = () => {
    setIsBottomsheetOpen(true);
  };
  const closeBottomSheet = () => {
    setIsBottomsheetOpen(false);
  };
  return (
    <StyledContainer>
      <Header
        title={'태리로제떡볶이 (2/6)'}
        leftIcon={'back'}
        rightIcon={'more'}
        rightIconClick={handleRightIconClick}
      />
      <ChatHeader />
      <ChatBubble />
      <ChatInput />
      <BottomSheetModal
        isOpen={isBottomsheetOpen}
        onClose={closeBottomSheet}>
        {
          <SheetContainer>
            <CancelButton onClick={closeBottomSheet}>취소</CancelButton>
            <SheetBox>알림끄기</SheetBox>
            <SheetBox>채팅방 나가기</SheetBox>
          </SheetContainer>
        }
      </BottomSheetModal>
      <ChatDeclarationBotomSheet />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 2000px;
  height: 100%;
`;
const SheetContainer = styled.div`
  position: relative;
  padding: 34px 16px 9px 16px;
`;
const CancelButton = styled.div`
  position: absolute;
  right: 27px;
  top: 7px;
  color: ${({ theme }) => theme.colors.grayColor11};
  cursor: pointer;
`;
const SheetBox = styled.div`
  text-align: center;
  padding: 16px 15px;
  cursor: pointer;

  &:nth-child(2) {
    border-bottom: 0.3px solid ${({ theme }) => theme.colors.barBorderColor};
  }
`;
export default ChatRoom;
