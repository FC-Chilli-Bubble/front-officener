import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';

import ChatBubble from '@/components/ChatRoom/ChatBubble/ChatBubble';
import ChatDeclarationBotomSheet from '@/components/ChatRoom/ChatDeclaration/ChatDeclarationBotomSheet';
import ChatHeader from '@/components/ChatRoom/ChatHeader/ChatHeader';
import ChatInput from '@/components/ChatRoom/ChatInput';
import Header from '@/components/Common/Header';
import { isMobileAtom, keyboardHeightAtom } from '@/states/chatInputFocusAtom';
import { userInfoAtom } from '@/states/userDataAtom';
import { isBottomsheetOpenAtom } from '@/states/chatBottomSheetAtom';
import ChatHeaderBottomSheet from '@/components/ChatRoom/ChatHeader/ChatHeaderBottomSheet';
import { chatInfoAtom } from '@/states/chatRoomdataAtom';
import { IDeliveryPost } from '@/types/Delivery/IDeliveryPost';
import { fetchDeliveryPostDetail } from '@/apis/Delivery/deliveryDetailRequests';

const ChatRoom = () => {
  const params = useParams();
  const navigate = useNavigate();

  const userInfo = useRecoilValue(userInfoAtom);
  const setIsMobile = useSetRecoilState(isMobileAtom);
  const setKeyboardHeight = useSetRecoilState(keyboardHeightAtom);
  const setIsBottomsheetOpen = useSetRecoilState(isBottomsheetOpenAtom);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const setMessageData = useSetRecoilState(chatInfoAtom);
  const [detail, setDetail] = useState<IDeliveryPost | null>(null);

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
      `ws://chillibubble.site/api/chat/${params.roomId}?ticket=${userInfo.userInfo.token}`
    );

    // WebSocket 수신
    newSocket.onmessage = e => {
      const data = JSON.parse(e.data);
      setMessageData(prevData => ({
        messages: [data, ...(prevData?.messages || [])],
        members: prevData?.members || []
      }));
    };

    setSocket(newSocket); // WebSocket을 상태로 설정
  };

  const getDeliveryPostDetail = async (roomId: string) => {
    const res = await fetchDeliveryPostDetail(roomId);
    setDetail(res.data);
  };

  useEffect(() => {
    // WebSocket 연결 초기화
    initializeWebSocket();

    // 정보 불러오기 api
    getDeliveryPostDetail(String(params.roomId));

    // 스크롤 확인
    handleScroll();

    //모바일 확인
    detectMobile();

    // 컴포넌트 언마운트 시 WebSocket 연결 닫기
    return () => {
      if (socket) {
        socket.close();
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

  console.log(detail);

  return (
    <StyledContainer>
      <Header
        title={`${detail?.storeName} ${detail?.attendees}/${detail?.maxAttendees}`}
        leftIcon={'back'}
        leftIconClick={handleLeftIconClick}
        rightIcon={'more'}
        rightIconClick={handleRightIconClick}
      />

      <ChatHeader detail={detail} />
      <ChatBubble />
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
