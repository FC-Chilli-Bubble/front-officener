import { useState } from 'react';
import { styled } from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';

import IconSend from '@/assets/chatrooms/ico_send.svg';
import { chatInputFocusAtom, isMobileAtom } from '@/states/chatInputFocusAtom';

const ChatInput = () => {
  const [inputValue, setInputValue] = useState('');
  const isMobile = useRecoilValue(isMobileAtom);
  const [inputFocus, setInputFocus] = useRecoilState(chatInputFocusAtom);
  const SEND_ICON = IconSend;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // 웹소켓 통신 연결
    setInputValue('');
  };

  // 엔터 누를 때 보내기
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // 웹소켓 통신 연결
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
        placeholder={String(isMobile)}
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
