import React from 'react';
import styled from 'styled-components';

interface IChatData {
  profileImage: string;
  name: string;
  message: string;
}

const ChatItem: React.FC<IChatData> = ({ profileImage, name, message }) => {
  return (
    <>
      <StyledChatItem>
        <img
          src={profileImage}
          alt="Profile"
        />
        <div>
          <strong>{name}</strong>
          <p>{message}</p>
        </div>
      </StyledChatItem>
      <StyledDivider />
    </>
  );
};

const StyledChatItem = styled.div`
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

export default ChatItem;
