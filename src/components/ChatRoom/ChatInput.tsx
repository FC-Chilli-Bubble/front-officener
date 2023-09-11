
import { styled } from "styled-components";

const ChatInput = () => {

  return (

        <Container>
          <InputBox placeholder="메시지 보내기" />
          <SendIco/>
        </Container>
  );
};

const Container = styled.div`
  display: flex;
width: 100%;
padding: 10px 14px;
justify-content: center;
align-items: center;
gap: 11px;
background: ${({ theme }) => theme.colors.white};
box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.05);
`;
const InputBox = styled.input`
width: 100%;
border: none;
height: 40px;
padding: 11px 24px;
align-items: center;
border-radius: 8px;
background: ${({ theme }) => theme.colors.grayColor1};
&:focus{
    outline: none;
}
`;  
const SendIco = styled.div`
    width: 54px;
    height: 50px;
    background-image: url(vite.svg);
    background-position: center;
    background-repeat: no-repeat;

`;

export default ChatInput;