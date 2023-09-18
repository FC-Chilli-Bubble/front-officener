import { styled } from 'styled-components';
import { getName } from './ChatFunctions';

type Tprops = {
  senderId: number;
  type: string;
  keyNum: number;
};

const ChatAlert = ({ senderId, type, keyNum }: Tprops) => {
  const renderAlertText = (type: string) => {
    switch (type) {
      case 'REMITTED_ALERT':
        return '님이 송금을 완료했어요! 호스트님 확인해주세요.';
      case 'EXIT_ALERT':
        return '님이 나가기 요청을 했어요! 호스트님 확인해주세요';
      case 'ENTER_ALERT':
        return '님이 참여한 배달의 모집이 완료되었습니다.';
    }
  };

  return (
    <StyledContainer
      id={type}
      key={keyNum}>
      <StyledNameSpace>{getName(senderId)}</StyledNameSpace>
      <p>{renderAlertText(type)}</p>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 40px;
  margin-top: 16px;
  padding: 13px 26px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 12px;
  &#REMITTED_ALERT {
    border: 1px solid ${({ theme }) => theme.colors.barBorderColor};
    background: ${({ theme }) => theme.colors.white};
  }
  &#EXIT_ALERT {
    font-size: 14px;
    font-weight: 700;
    border: 1px solid ${({ theme }) => theme.colors.barBorderColor};
    background: ${({ theme }) => theme.colors.white};
  }
  &#ENTER_ALERT {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.ctaColor};
  }
`;
const StyledNameSpace = styled.div`
  font-weight: 700;
`;

export default ChatAlert;
