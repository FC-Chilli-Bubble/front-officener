import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';

import ChatAlert from '@/components/ChatRoom/ChatBubble/ChatAlert';
import ChatBubbleRender from '@/components/ChatRoom/ChatBubble/ChatBubbleRender';
import { chatInputFocusAtom, isMobileAtom, keyboardHeightAtom } from '@/states/chatInputFocusAtom';
import { getRoomInfo } from '@/apis/ChatRoom/ChatEnterApi';
import { chatInfoAtom } from '@/states/chatRoomdataAtom';

const ChatBubble = () => {
  const params = useParams();
  const inputFocus = useRecoilValue(chatInputFocusAtom);
  const keyboardHeight = useRecoilValue(keyboardHeightAtom);
  const isMobile = useRecoilValue(isMobileAtom);
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const [messageData, setMessageData] = useRecoilState(chatInfoAtom);

  useEffect(() => {
    // 컴포넌트 진입시 화면을 맨 끝으로 옮기기
    messageEndRef.current?.scrollIntoView({ behavior: 'auto' });

    // 채팅방 정보 api 호출
    getRoomInfoApi();

  }, []);

  useEffect(()=>{
    // 수신시 화면을 맨 끝으로 옮기기
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageData])

  console.log(params.roomId)
    // 채팅방 정보 get api 호출 함수
    const getRoomInfoApi = async () => {
      try {
        const response = await getRoomInfo(String(params.roomId));
        setMessageData(response);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    }; 


  return (
    <StyledContainer
      inputfocus={inputFocus}
      keyboardheight={keyboardHeight}
      ismobile={isMobile}
    >
      {messageData?.messages.map((messageContent, index) => {
        const reversedIndex = messageData.messages.length - 1 - index;
        return messageData.messages[reversedIndex].messageType === 'TALK' ? (
          <ChatBubbleRender
            messageContent={messageData.messages[reversedIndex]}
            index={reversedIndex}
            key={messageData.messages[reversedIndex].messageId}
          />
        ) : (
          <ChatAlert
            senderId={messageData.messages[reversedIndex].senderId}
            type={messageData.messages[reversedIndex].messageType}
            key={messageData.messages[reversedIndex].messageId}
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
