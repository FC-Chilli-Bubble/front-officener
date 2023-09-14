import { styled } from 'styled-components';
import Button from '../Common/Button';
import IconCopy from '@/assets/ico_copy.svg';
import IconWon from '@/assets/ico_won.svg';
import IconAlarm from '@/assets/ico_alarm.svg';

const ChatHeader = () => {
  const roomInfo = {
    bankName: '카카오뱅크',
    acountNumber: '12312314123',
    limitTime: 'PM 12:44까지'
  };

  const CHAT_HEADER_ICONS = {
    copy: IconCopy,
    titlewon: IconWon,
    titlealarm: IconAlarm
  };

  return (
    <StyledContainer>
      <StyledDetail>
        <StyledDetailTitle>
          <StyledIcon>
            <img
              src={CHAT_HEADER_ICONS['titlewon']}
              alt=""
            />
          </StyledIcon>
          호스트 계좌번호
        </StyledDetailTitle>
        <div>
          {roomInfo.bankName} {roomInfo.acountNumber}
        </div>
        <StyledIcon>
          <img
            src={CHAT_HEADER_ICONS['copy']}
            alt=""
          />
        </StyledIcon>
      </StyledDetail>
      <StyledDetail>
        <StyledDetailTitle>
          <StyledIcon>
            <img
              src={CHAT_HEADER_ICONS['titlealarm']}
              alt=""
            />
          </StyledIcon>
          이체 마감시간
        </StyledDetailTitle>
        <div>{roomInfo.limitTime}</div>
      </StyledDetail>
      <Button
        size="small"
        title="송금완료"
        onClick={() => console.log('송금완료')}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 0.3px solid ${({ theme }) => theme.colors.barBorderColor};
  border-top: 0.3px solid ${({ theme }) => theme.colors.barBorderColor};
  display: flex;
  padding: 19px 16px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
const StyledDetail = styled.div`
  font-size: 12px;
  width: 100%;
  padding: 0 7px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 7px;
`;
const StyledDetailTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: 700;
`;
const StyledIcon = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export default ChatHeader;
