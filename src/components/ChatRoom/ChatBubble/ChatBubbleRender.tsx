import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { useMemberInfo } from '@/hooks/useMemberInfo';
import { chatInfoAtom } from '@/states/chatRoomdataAtom';
import ChatProfile from '@/components/ChatRoom/ChatProfile/ChatProfile';

type TMessageContent = {
  messageId: number;
  messageType: string;
  content?: string;
  senderId: number;
  sendTime: string;
};

type Tprops = {
  messageContent: TMessageContent;
  index: number;
};


const ChatBubbleRender = ({ messageContent, index }: Tprops) => {
  const { isSenderMe } = useMemberInfo();
  const messageData = useRecoilValue(chatInfoAtom);


  // 메세지와 보내는 사람이 같은지 판별
  const isSameAuthorAsPrevious =
    index > 0 && messageData?.messages[index - 1]?.senderId === messageContent.senderId;
    
  //보내는 사람이 나와 같은지 판별
  const isAuthorMe = isSenderMe(messageContent.senderId);

  //이전의 메세지가 같은 타입인지 판별
  const isTypeSameAsPrevious =
    index > 0 && messageData.messages[index - 1]?.messageType === messageContent.messageType;

  //프로필이 필요한지 판별
  const isProfileNeed =
    (!isAuthorMe && !isSameAuthorAsPrevious) || (!isAuthorMe && !isTypeSameAsPrevious);

  const gapSize = isSameAuthorAsPrevious && isTypeSameAsPrevious ? '6px' : '16px';

  return (
    <StyledBubble
      key={messageContent.messageId}
      margintop={gapSize}>
      {isProfileNeed ? <ChatProfile senderId={messageContent.senderId} /> : null}
      <StyledBubbleContent className={isAuthorMe ? 'myBubbles' : 'othersBubbles'}>
        <p>{messageContent.content}</p>
      </StyledBubbleContent>
    </StyledBubble>
  );
};

const StyledBubble = styled.div<{ margintop: string }>`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.margintop};
`;
const StyledBubbleContent = styled.div`
  padding: 11px 16px;
  border-radius: 20px;
  font-size: 14px;
  overflow-wrap: break-word;
  word-break: break-word;
  &.myBubbles {
    max-width: calc(100% - 80px);
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.ctaColor};
    text-align: right;
    margin-left: auto;
  }
  &.othersBubbles {
    max-width: calc(100% - 120px);
    margin-left: 60px;
    margin-right: auto;
    background: ${({ theme }) => theme.colors.grayColor1};
  }
`;

export default ChatBubbleRender;
