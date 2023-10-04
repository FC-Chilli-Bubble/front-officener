import { styled } from 'styled-components';
import { useMemberInfo } from '@/hooks/useMemberInfo';

type Tprops = {
  senderId: number;
  type: string;
};

const ChatAlert = ({ senderId, type }: Tprops) => {
  const { getName } = useMemberInfo();

  //알람 타입 지정
  const renderAlertText = (type: string) => {
    switch (type) {
      case 'COMPLETE_REMITTANCE':
        return '님이 송금을 완료했어요! 호스트님 확인해주세요.';
      case 'REQUEST_EXIT':
        return '님이 나가기 요청을 했어요! 호스트님 확인해주세요';
      case 'CLOSE_PARTICIPATION':
        return '님이 참여한 배달의 모집이 완료되었습니다.';
      case 'COMPLETE_DELIVERY':
        return '배달이 완료되었어요. 음식을 수령해주세요.';
      case 'COMPLETE_RECEIPT':
        return '님이 수령을 완료했어요!';
      default:
        return '알람 메세지 오류!';
    }
  };

  return (
    <StyledContainer id={type}>
      {type !== 'COMPLETE_DELIVERY' && <StyledNameSpace>{getName(senderId)}</StyledNameSpace>}
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
  &#COMPLETE_REMITTANCE,
  &#COMPLETE_RECEIPT,
  &#COMPLETE_DELIVERY {
    border: 1px solid ${({ theme }) => theme.colors.barBorderColor};
    background: ${({ theme }) => theme.colors.white};
  }
  &#REQUEST_EXIT {
    font-size: 14px;
    font-weight: 700;
    border: 1px solid ${({ theme }) => theme.colors.barBorderColor};
    background: ${({ theme }) => theme.colors.white};
  }
  &#CLOSE_PARTICIPATION {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.ctaColor};
  }
`;
const StyledNameSpace = styled.div`
  font-weight: 700;
`;

export default ChatAlert;
