import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';

import { messageData } from '@/apis/dummy_ChatAPI';
import ChatAlert from '@/components/ChatRoom/ChatBubble/ChatAlert';
import ChatBubbleRender from '@/components/ChatRoom/ChatBubble/ChatBubbleRender';
import { chatInputFocusAtom, keyboardHeightAtom } from '@/states/chatInputFocusAtom';

const ChatBubble = () => {
  const inputFocus = useRecoilValue(chatInputFocusAtom);
  const keyboardHeight = useRecoilValue(keyboardHeightAtom);
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  //화면을 맨 끝으로 옮기기
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'auto' });
  }, []);

  return (
    <StyledContainer
      inputFocus={inputFocus}
      keyboardHeight={keyboardHeight}>
      {messageData.messages.map((messageContent, index) => {
        return messageContent.messageType === 'TALK' ? (
          <ChatBubbleRender
            messageContent={messageContent}
            index={index}
            key={messageContent.messageId}
          />
        ) : (
          <ChatAlert
            senderId={messageContent.senderId}
            type={messageContent.messageType}
            key={messageContent.messageId}
          />
        );
      })}
      <div ref={messageEndRef}></div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ inputFocus: boolean; keyboardHeight: number }>`
  display: flex;
  flex-direction: column;
  padding: 0 12px 16px 12px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media (max-width: 500px) {
    height: ${({ inputFocus, keyboardHeight }) =>
      inputFocus ? `calc(100% - 270px - ${keyboardHeight}px)` : '100%'};
  }
`;

export default ChatBubble;
