import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import ChatBubble from '@/components/ChatRoom/ChatBubble/ChatBubble';
import ChatDeclarationBotomSheet from '@/components/ChatRoom/ChatDeclaration/ChatDeclarationBotomSheet';
import ChatHeader from '@/components/ChatRoom/ChatHeader/ChatHeader';
import ChatInput from '@/components/ChatRoom/ChatInput';
import BottomSheetModal from '@/components/Common/BottomSheetModal';
import Header from '@/components/Common/Header';
import { isMobileAtom, keyboardHeightAtom } from '@/states/chatInputFocusAtom';

const ChatRoom = () => {
  const roomNum = 14;
  const socket = new WebSocket(
    `ws://ec2-3-38-247-92.ap-northeast-2.compute.amazonaws.com:8080/api/chat/${roomNum}`
  );

  useEffect(() => {
    // 마운트시 WebSocket 연결
    socket.onopen = () => {
      console.log('[open] 커넥션이 만들어졌습니다.');
    };

    socket.send(
      JSON.stringify({
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTIzMTIzQG5hdmVyLmNvbSIsImlhdCI6MTY5NTczMjAzOCwiZXhwIjoxNjk1NzM1NjM4fQ.nZHUmMtDZ__lzbENFNYjKQoEktEe1mf0YFKELlvpTlc'
      })
    );

    socket.onclose = () => {
      console.log('[close] 커넥션이 닫혔습니다.');
    };

    console.log('챗룸', socket.readyState);

    return () => {
      // 언마운트시 WebSocket 연결 닫기
      if (socket) {
        socket.close();
      }
    };
  }, []);

  const [isBottomsheetOpen, setIsBottomsheetOpen] = useState(false);
  const setIsMoble = useSetRecoilState(isMobileAtom);
  const setKeyboardHeight = useSetRecoilState(keyboardHeightAtom);

  const navigate = useNavigate();

  //접속한 유저가 pc에서 사용 중인지, mobile에서 사용 중인지 확인
  const isMobile = () => {
    const user = navigator.userAgent;
    if (user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) {
      setIsMoble(true);
    }
  };

  //키보드가 올라오면 줄어든 뷰포트 사이즈 만큼 스크롤 이동
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

  useEffect(() => {
    handleScroll();
    isMobile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRightIconClick = () => {
    setIsBottomsheetOpen(true);
  };

  const handleLeftIconClick = () => {
    navigate(-1);
  };

  const closeBottomSheet = () => {
    setIsBottomsheetOpen(false);
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
      <ChatBubble />
      <ChatInput socket={socket} />
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
  position: relative;
  height: inherit;
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
