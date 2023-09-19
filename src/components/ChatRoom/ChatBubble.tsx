import { styled } from 'styled-components';
import { messageData } from '../../apis/dummy_ChatAPI';
import { isSenderMe } from './ChatFunctions';
import ChatAlert from './ChatAlert';
import ChatProfile from './ChatProfile';
import { useEffect, useRef } from 'react';

type TMessageContent = {
  messageId: number;
  messageType: string;
  content?: string;
  senderId: number;
  sendTime: string;
};
const ChatBubble = () => {
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'auto' });
  }, []);

  const renderChatStyledBubbles = (messageContent: TMessageContent, index: number) => {
    //이전의 메세지와 보내는 사람이 같은지 판별
    const isSameAuthorAsPrevious =
      index > 0 && messageData.messages[index - 1].senderId === messageContent.senderId;
    //보내는 사람이 나와 같은지 판별
    const isAuthorMe = isSenderMe(messageContent.senderId);
    //이전의 메세지가 같은 타입인지 판별
    const isTypeSameAsPrevious =
      index > 0 && messageData.messages[index - 1].messageType === messageContent.messageType;
    //프로필이 필요한지 판별
    const isProfileNeed =
      (!isAuthorMe && !isSameAuthorAsPrevious) || (!isAuthorMe && !isTypeSameAsPrevious);

    const gapSize = isSameAuthorAsPrevious && isTypeSameAsPrevious ? '6px' : '16px';

    return (
      <StyledStyledWrap
        key={messageContent.messageId}
        style={{ marginTop: gapSize }}>
        {isProfileNeed ? <ChatProfile senderId={messageContent.senderId} /> : null}
        <StyledBubbles className={isAuthorMe ? 'myBubbles' : 'othersBubbles'}>
          <p>{messageContent.content}</p>
        </StyledBubbles>
      </StyledStyledWrap>
    );
  };

  return (
    <StyledContainer>
      {messageData.messages.map((messageContent, index) => {
        return messageContent.messageType === 'TALK' ? (
          renderChatStyledBubbles(messageContent, index)
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
const StyledStyledWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledBubbles = styled.div`
  padding: 11px 16px;
  border-radius: 20px;
  font-size: 14px;
  overflow-wrap: break-word;
  word-break: break-word;
  &.myBubbles {
    max-width: calc(100% - 80px);
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.ctaColor};
    text-align: right;
    margin-left: auto;
  }
  &.othersBubbles {
    max-width: calc(100% - 120px);
    margin-left: 60px;
    margin-right: auto;
    background: ${({ theme }) => theme.colors.grayColor1};
  }
`;

export default ChatBubble;
