import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import ChatBubble from '@/components/ChatRoom/ChatBubble/ChatBubble';
import ChatDeclarationBotomSheet from '@/components/ChatRoom/ChatDeclaration/ChatDeclarationBotomSheet';
import ChatHeader from '@/components/ChatRoom/ChatHeader/ChatHeader';
import ChatInput from '@/components/ChatRoom/ChatInput';
import Header from '@/components/Common/Header';
import { isMobileAtom, keyboardHeightAtom } from '@/states/chatInputFocusAtom';
import { userInfoAtom } from '@/states/userDataAtom';
import { isBottomsheetOpenAtom } from '@/states/chatBottomSheetAtom';
import ChatHeaderBottomSheet from '@/components/ChatRoom/ChatHeader/ChatHeaderBottomSheet';

const ChatRoom = () => {
  const userInfo = useRecoilValue(userInfoAtom);
  const roomNum = 20;
  const setIsMobile = useSetRecoilState(isMobileAtom);
  const setKeyboardHeight = useSetRecoilState(keyboardHeightAtom);
  const setIsBottomsheetOpen = useSetRecoilState(isBottomsheetOpenAtom);
  const navigate = useNavigate();
  const [socket, setSocket] = useState<WebSocket | null>(null);

  console.log(socket,"챗룸");

  // 접속한 유저가 모바일인지 확인
  const detectMobile = () => {
    const user = navigator.userAgent;
    if (user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) {
      setIsMobile(true);
    }
  };

    // WebSocket 연결 초기화 함수
    const initializeWebSocket = () => {
      const newSocket = new WebSocket(
        `ws://ec2-3-38-247-92.ap-northeast-2.compute.amazonaws.com:8080/api/chat/${roomNum}?ticket=${userInfo.userInfo.token}`
      );
  
      newSocket.onopen = () => {
        console.log('[open] 커넥션이 만들어졌습니다.');
      };
  
      newSocket.onclose = () => {
        console.log('[close] 커넥션이 닫혔습니다.');
      };
  
      setSocket(newSocket); // WebSocket을 상태로 설정
    };
  

  useEffect(() => {
    // WebSocket 연결 초기화
    initializeWebSocket();

    // 스크롤 확인
    handleScroll();
    detectMobile();

    // 컴포넌트 언마운트 시 WebSocket 연결 닫기
    return () => {
      if (socket) {
        socket.close();
        console.log('WebSocket 연결이 닫혔습니다.');
      }
    };
  }, []);

  // 키보드가 올라올 때 스크롤 이동 처리 함수
  const handleScroll = () => {
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
  };

  const handleRightIconClick = () => {
    setIsBottomsheetOpen(true);
  };

  const handleLeftIconClick = () => {
    navigate(-1);
  };

  return (
    <StyledContainer>
      <Header
        title={'태리로제떡볶이 3/6'}
        leftIcon={'back'}
        leftIconClick={handleLeftIconClick}
        rightIcon={'more'}
        rightIconClick={handleRightIconClick}
      />

      <ChatHeader />
      <ChatBubble socket={socket} />
      <ChatInput socket={socket} />
      <ChatHeaderBottomSheet />
      <ChatDeclarationBotomSheet />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  height: inherit;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default ChatRoom;
