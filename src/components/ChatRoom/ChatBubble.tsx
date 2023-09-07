import { styled } from "styled-components";

const ChatBubble = () => {

  return (
    <Container>
        <BubblesContainer className="othersBubbles">
        <ProfileCard>
                <ProfielImg></ProfielImg>
                <div>임승이</div>
            </ProfileCard>
            <Bubbles className="othersBubbles">
            안녕하세요
            </Bubbles>
        </BubblesContainer>
        <BubblesContainer className="myBubbles">
            <Bubbles className="myBubbles">
            하이
            </Bubbles>
            <Bubbles className="myBubbles">
            메뉴 정하세요
            </Bubbles>
        </BubblesContainer>
        <BubblesContainer className="othersBubbles">
            <ProfileCard>
                <ProfielImg></ProfielImg>
                <div>임승이</div>
            </ProfileCard>
            <Bubbles className="othersBubbles">
            로제 닭강정 세트 간장으로요
            </Bubbles>
            <Bubbles className="othersBubbles">
            토핑 없음
            </Bubbles>
        </BubblesContainer>
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    padding: 16px 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`;
const BubblesContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    &.myBubbles {
        align-items: flex-end;
    }
    &.othersBubbles{
        width: fit-content;
    }
`;
const Bubbles = styled.div`
    width: fit-content;
    padding: 11px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    font-size: 14px;
    &.myBubbles {
        align-items: flex-end;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.ctaColor};
    }
    &.othersBubbles {
        margin-left: 60px;
        background: ${({ theme }) => theme.colors.grayColor1};
    }
`;
const ProfileCard = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    align-content: center;
    gap: 8px;
    flex-shrink: 0;
    flex-wrap: wrap;
`;
const  ProfielImg = styled.div`
    width: 54px;
    height: 50px;
    background-image: url(vite.svg);
    background-position: center;
    background-repeat: no-repeat;
`;

export default ChatBubble;