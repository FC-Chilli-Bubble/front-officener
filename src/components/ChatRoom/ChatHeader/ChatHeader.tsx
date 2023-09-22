import { useState } from 'react';
import { styled } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useModal } from '@/hooks/useModal';
import { MODAL_DATA_GUEST, MODAL_DATA_HOST } from '@/constants/chatRoomModalData';
import { isHost, isRemitted } from '@/components/ChatRoom/ChatFunctions';
import Button from '@/components/Common/Button';
import IconCopy from '@/assets/chatrooms/ico_copy.svg';
import IconWon from '@/assets/chatrooms/ico_won.svg';
import IconAlarm from '@/assets/chatrooms/ico_alarm.svg';
import ButtonTitleGuest from '@/components/ChatRoom/ChatHeader/ButtonTitleGuest';

const ChatHeader = () => {
  const { openModal, closeModal } = useModal();
  const myid = 1;
  //로그인시 데이터 내려받아 사용
  const changeModalGuest = isRemitted(myid)
    ? MODAL_DATA_GUEST.receiveModal
    : MODAL_DATA_GUEST.sendModal;

  const [isReceiveButtonDisabled, setIsReceiveButtonDisabled] = useState(false);
  const [isEndButtonDisabled, setIsEndButtonDisabled] = useState(false);

  const handleClickHostButton = (title: string) => {
    title === '배달'
      ? openModal({
          ...MODAL_DATA_HOST.receiveModal,
          positiveCallback: () => {
            //api 통신 연결
            setIsReceiveButtonDisabled(true);
          },
          negativeCallback: () => {
            closeModal();
          }
        })
      : openModal({
          ...MODAL_DATA_HOST.participationEndsdModal,
          positiveCallback: () => {
            //api 통신 연결
            setIsEndButtonDisabled(true);
          },
          negativeCallback: () => {
            closeModal();
          }
        });
  };

  const handleClickGuestButton = () => {
    openModal({
      ...changeModalGuest,
      positiveCallback: () => {
        //api 통신 연결
      },
      negativeCallback: () => {
        closeModal();
      }
    });
  };

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
        <CopyToClipboard text={`${roomInfo.bankName} ${roomInfo.acountNumber}`}>
          <StyledAcountNumber>
            {roomInfo.bankName} {roomInfo.acountNumber}
            <StyledIconButton>
              <img
                src={CHAT_HEADER_ICONS['copy']}
                alt=""
              />
            </StyledIconButton>
          </StyledAcountNumber>
        </CopyToClipboard>
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
      {isHost(myid) ? (
        <StyledButtonWrap>
          <Button
            size="small"
            title="배달완료"
            onClick={() => handleClickHostButton('배달')}
            disabled={isReceiveButtonDisabled}
          />
          <Button
            size="small"
            title="참여 마감하기"
            onClick={() => handleClickHostButton('참여마감')}
            disabled={isEndButtonDisabled}
          />
        </StyledButtonWrap>
      ) : (
        <Button
          size="small"
          title={<ButtonTitleGuest isRemitted={isRemitted(myid)} />}
          onClick={handleClickGuestButton}
        />
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: sticky;
  top: 20;
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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const StyledAcountNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const StyledButtonWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  padding: 0 8px;
`;

export default ChatHeader;
