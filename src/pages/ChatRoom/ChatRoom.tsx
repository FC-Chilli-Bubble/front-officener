import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useSetRecoilState } from 'recoil';

import ChatBubble from '@/components/ChatRoom/ChatBubble/ChatBubble';
import ChatDeclarationBotomSheet from '@/components/ChatRoom/ChatDeclaration/ChatDeclarationBotomSheet';
import ChatHeader from '@/components/ChatRoom/ChatHeader/ChatHeader';
import ChatInput from '@/components/ChatRoom/ChatInput';
import BottomSheetModal from '@/components/Common/BottomSheetModal';
import Header from '@/components/Common/Header';
import { keyboardHeightAtom } from '@/states/chatInputFocusAtom';

const ChatRoom = () => {
  const [isBottomsheetOpen, setIsBottomsheetOpen] = useState(false);
  const setKeyboardHeight = useSetRecoilState(keyboardHeightAtom);

  useEffect(() => {
    if (window) {
      let prevVisualViewport = window.visualViewport?.height;
      const handleVisualViewportResize = () => {
        const currentVisualViewport = Number(window.visualViewport?.height);

        if (prevVisualViewport && prevVisualViewport > currentVisualViewport) {
          const scrollHeight = Number(window.document.scrollingElement?.scrollHeight);
          const scrollTop = scrollHeight - Number(window.visualViewport?.height);
          setKeyboardHeight(prevVisualViewport - currentVisualViewport);
          window.scrollTo(scrollTop, 0);
        }
        prevVisualViewport = Number(window.visualViewport?.height);
      };

      if (window.visualViewport) {
        window.visualViewport.onresize = handleVisualViewportResize;
      }
    }
  }, []);

  const handleRightIconClick = () => {
    setIsBottomsheetOpen(true);
  };
  const closeBottomSheet = () => {
    setIsBottomsheetOpen(false);
  };
  return (
    <StyledContainer>
      <Header
        title={'태리로제떡볶이 3/6'}
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
          <StyledSheetContainer>
            <StyledCancelButton onClick={closeBottomSheet}>취소</StyledCancelButton>
            <StyledSheetBox>알림끄기</StyledSheetBox>
            <StyledSheetBox>채팅방 나가기</StyledSheetBox>
          </StyledSheetContainer>
        }
      </BottomSheetModal>
      <ChatDeclarationBotomSheet />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
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
export default ChatRoom;
