import { useState } from 'react';
import { styled } from 'styled-components';

import IconSend from '@/assets/chatRooms/ico_send.svg';

const ChatInput = () => {
  const [inputValue, setInputValue] = useState('');
  const SEND_ICON = IconSend;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent) => {
    console.log(inputValue);
    e.preventDefault();
    //웹소켓 통신 연결
    setInputValue('');
  };

  //엔터 누를 때 보내기
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      //웹소켓 통신 연결
      setInputValue('');
    }
  };

  return (
    <StyledContainer>
      <StyledInputBox
        placeholder="메시지 보내기"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
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

const StyledContainer = styled.form`
  bottom: 0;
  display: flex;
  width: 100%;
  padding: 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 11px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.05);
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
  cursor: pointer;
`;

export default ChatInput;
