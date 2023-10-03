import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';

// import { messageData } from '@/apis/dummy_ChatAPI';
import ChatAlert from '@/components/ChatRoom/ChatBubble/ChatAlert';
import ChatBubbleRender from '@/components/ChatRoom/ChatBubble/ChatBubbleRender';
import { chatInputFocusAtom, isMobileAtom, keyboardHeightAtom } from '@/states/chatInputFocusAtom';
import { IChat } from '@/types/Chatroom/IChatContent';

const ChatBubble = ({ socket }:{socket : WebSocket | null}) => {
  const inputFocus = useRecoilValue(chatInputFocusAtom);
  const keyboardHeight = useRecoilValue(keyboardHeightAtom);
  const isMobile = useRecoilValue(isMobileAtom);
  const [messageData, setMessageData] = useState<IChat>({messages:[]})
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  //화면을 맨 끝으로 옮기기
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'auto' });
  }, []);
  console.log(socket,"버블");
  //수신받기
  useEffect(() => {
    if (socket && socket.readyState === WebSocket.OPEN){
      socket.onmessage = (e) => {
        const data = JSON.parse(e.data);
        console.log(data, "왜 안 되는거?");
        setMessageData((prevData) => ({
          messages: [...prevData.messages, data],
        }));
      }
    }
  }, [socket]);

  return (
    <StyledContainer
      inputfocus={inputFocus}
      keyboardheight={keyboardHeight}
      ismobile={isMobile}>
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

const StyledContainer = styled.div<{
  inputfocus: boolean;
  keyboardheight: number;
  ismobile: boolean;
}>`
  display: flex;
  height: inherit;
  flex-direction: column;
  padding: 0 12px 16px 12px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  ${({ inputfocus, keyboardheight, ismobile }) =>
    ismobile && {
      height: inputfocus ? `calc(100% - 270px - ${keyboardheight}px)` : '100%'
    }}
`;

export default ChatBubble;
