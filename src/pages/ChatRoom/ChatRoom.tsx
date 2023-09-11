import ChatAlert from "@/components/ChatRoom/ChatAlert";
import ChatBubble from "@/components/ChatRoom/ChatBubble";
import ChatInput from "@/components/ChatRoom/ChatInput";
import { styled } from "styled-components";

const ChatRoom = () => {

  return (
    <Container>
        <h1>Chat</h1>
        <ChatBubble />
        <ChatAlert />
        <ChatInput />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;  
export default ChatRoom;