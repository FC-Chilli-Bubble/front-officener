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

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'auto' });
  };

  useEffect(() => {
    // 채팅방 정보 api 호출
    getRoomInfoApi();

    // 화면 크기가 변경될 때 스크롤 위치를 맨 아래로 이동
    const handleResize = () => {
      scrollToBottom();
    };

    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messageData]);

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
      ismobile={isMobile}>
      {messageData?.messages.map((messageContent, index) => {
        const reversedIndex = messageData.messages.length - 1 - index;
        return messageContent && messageData.messages[reversedIndex].messageType === 'TALK' ? (
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
  padding: 0 16px 12px 16px;
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
