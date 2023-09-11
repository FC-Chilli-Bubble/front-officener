import { styled } from "styled-components";

const ChatAlert = () => {
    const name = "김종국";
  return (
    <Container>
        <NameSpace>{name}</NameSpace>님이 송금을 완료했어요! 호스트님 확인해주세요.
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 13px 26px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #CECECE;
    background: ${({ theme }) => theme.colors.white};
    font-size: 12px;
`;
const NameSpace = styled.div`
    font-weight: 700;
`

export default ChatAlert;