import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';

import { messageData } from '@/apis/dummy_ChatAPI';
import ChatAlert from '@/components/ChatRoom/ChatAlert';
import ChatBubbleRender from '@/components/ChatRoom/ChatBubbleRender';

const ChatBubble = () => {
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  //맨 끝으로 렌더
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'auto' });
  }, []);

  return (
    <StyledContainer>
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

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 0 12px 16px 12px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export default ChatBubble;
