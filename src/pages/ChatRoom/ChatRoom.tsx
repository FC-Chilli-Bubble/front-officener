import ChatBubble from "@/components/ChatRoom/ChatBubble";
import { styled } from "styled-components";

const ChatRoom = () => {

  return (
    <StyledLayout>
        <h1>Chat</h1>
        <ChatBubble />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  
`;

export default ChatRoom;