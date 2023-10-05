import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { IChat } from '@/types/Delivery/IDeliveryChat';
import { FOOD_IMAGE } from '@/constants/commonUiData';

interface IChatData {
  chatItem: IChat;
}

const ChatItem = React.memo(({ chatItem }: IChatData) => {
  const navigate = useNavigate();

  const handleMoveChat = () => {
    navigate(`/chatroom/${chatItem.chatRoomId}`);
  };

  return (
    <>
      <StyledChatItem onClick={handleMoveChat}>
        <img
          src={FOOD_IMAGE[chatItem.foodTag]}
          alt="Profile"
        />
        <div>
          <strong>{chatItem.storeName}</strong>
          <p>{chatItem.recentMessage}</p>
        </div>
        {chatItem.numUnreadMessages > 0 && (
          <StyledChatNum>{chatItem.numUnreadMessages}</StyledChatNum>
        )}
      </StyledChatItem>
      <StyledDivider />
    </>
  );
});

const StyledChatItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  cursor: pointer;

  img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  p {
    color: ${props => props.theme.colors.grayColor10};
  }
`;

const StyledDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.colors.grayColor1};
`;

const StyledChatNum = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.redColor0};
  color: ${props => props.theme.colors.white};
  border-radius: 50%;
  position: absolute;
  right: 12px;
  font-size: 12px;
  font-weight: 700;
`;

export default ChatItem;
