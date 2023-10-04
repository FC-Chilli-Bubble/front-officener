import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';

// import { messageData } from '@/apis/dummy_ChatAPI';
import ChatAlert from '@/components/ChatRoom/ChatBubble/ChatAlert';
import ChatBubbleRender from '@/components/ChatRoom/ChatBubble/ChatBubbleRender';
import { chatInputFocusAtom, isMobileAtom, keyboardHeightAtom } from '@/states/chatInputFocusAtom';
import { getRoomInfo } from '@/apis/ChatRoom/ChatEnterApi';
import { chatInfoAtom } from '@/states/chatRoomdataAtom';

const ChatBubble = ({ socket }:{socket : WebSocket | null}) => {
  const roomNum = 24;// 가져오기

  const inputFocus = useRecoilValue(chatInputFocusAtom);
  const keyboardHeight = useRecoilValue(keyboardHeightAtom);
  const isMobile = useRecoilValue(isMobileAtom);
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const [messageData, setMessageData] = useRecoilState(chatInfoAtom);

  useEffect(() => {
    // 화면을 맨 끝으로 옮기기
    messageEndRef.current?.scrollIntoView({ behavior: 'auto' });

    // 채팅방 정보 get api 호출 함수
    const getRoomInfoApi = async () => {
      try {
        const response = await getRoomInfo(roomNum);
        setMessageData(response);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };
    console.log("커몽", messageData)

    // 채팅방 정보 api 호출
    getRoomInfoApi();

    // socket 수신 받기
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.onmessage = (e) => {
        const data = JSON.parse(e.data);
        console.log(data, "왜 안 되는거?");
        setMessageData((prevData) => ({
          messages: [...(prevData?.messages || []), data],
          members: prevData?.members || [],
        }));
      };
    }
  }, []);

  console.log(socket,"버블");

  return (
    <StyledContainer
      inputfocus={inputFocus}
      keyboardheight={keyboardHeight}
      ismobile={isMobile}>
      {messageData && 
      messageData.messages.map((messageContent, index) => {
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
