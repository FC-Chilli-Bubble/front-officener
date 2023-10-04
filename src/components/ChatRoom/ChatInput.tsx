import { useState } from 'react';
import { styled } from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';

import IconSend from '@/assets/chatrooms/ico_send.svg';
import { chatInputFocusAtom, isMobileAtom } from '@/states/chatInputFocusAtom';

const ChatInput = ({ socket }: { socket: WebSocket | null }) => {
  const [inputValue, setInputValue] = useState('');
  const isMobile = useRecoilValue(isMobileAtom);
  const [inputFocus, setInputFocus] = useRecoilState(chatInputFocusAtom);
  const SEND_ICON = IconSend;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const socketSend = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      const getTime = new Date().getTime() - (new Date().getTimezoneOffset() * 60000)
      const nowDate = new Date(getTime).toISOString().slice(0, -1);
      const MESSAGE_DATA = {
        messageType: 'TALK',
        content: inputValue,
        sendTime: nowDate
      };
      socket.send(JSON.stringify(MESSAGE_DATA));
      console.log(MESSAGE_DATA, '성공');
    } else {
      console.log('WebSocket 연결이 열리지 않았습니다.');
    }
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inputValue.length > 0) {
      socketSend();
      setInputValue('');
    }
  };

  // 엔터 누를 때 보내기
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key === 'Enter' && inputValue.length > 0) {
      socketSend();
      setInputValue('');
    }
  };

  const handleInputFocus = () => {
    setInputFocus(true);
  };

  const handleInputBlur = () => {
    setInputFocus(false);
  };

  return (
    <StyledContainer
      inputfocus={inputFocus}
      ismobile={isMobile}>
      <StyledInputBox
        placeholder={'메세지를 입력해주세요.'}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={inputValue}
      />
      <StyledSendIco onClick={handleSubmit}>
        <img
          src={SEND_ICON}
          alt=""
        />
      </StyledSendIco>
    </StyledContainer>
  );
};

const StyledContainer = styled.form<{ inputfocus: boolean; ismobile: boolean }>`
  bottom: 0;
  position: sticky;
  display: flex;
  width: 100%;
  padding: 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 11px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.05);
  ${({ inputfocus, ismobile }) => ismobile && `padding-bottom: ${inputfocus ? '10px' : '34px'}`};
`;

const StyledInputBox = styled.input`
  width: 100%;
  border: none;
  height: 40px;
  padding: 11px 24px;
  align-items: center;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.grayColor1};
  &:focus {
    outline: none;
  }
`;

const StyledSendIco = styled.button`
  border: none;
  background-color: transparent;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export default ChatInput;
