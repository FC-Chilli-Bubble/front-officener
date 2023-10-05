import { useState } from 'react';
import { styled } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useParams } from 'react-router-dom';

import { useModal } from '@/hooks/useModal';
import { MODAL_DATA_GUEST, MODAL_DATA_HOST } from '@/constants/chatRoomModalData';
import { useMemberInfo } from '@/hooks/useMemberInfo';
import Button from '@/components/Common/Button';
import IconCopy from '@/assets/chatrooms/ico_copy.svg';
import IconWon from '@/assets/chatrooms/ico_won.svg';
import IconAlarm from '@/assets/chatrooms/ico_alarm.svg';
import ButtonTitleGuest from '@/components/ChatRoom/ChatHeader/ButtonTitleGuest';
import {
  createGuestReceivedPost,
  createGuestRemittedPost,
  createHostClosedPost,
  createHostDeliveredPost
} from '@/apis/ChatRoom/ChatHeaderButtonApis';
import { IDeliveryPost } from '@/types/Delivery/IDeliveryPost';
import { BANKS, TBankKey } from '@/constants/banks';

const ChatHeader = ({ detail }: { detail: IDeliveryPost | null }) => {
  const { getMyId, isHost, isRemitted } = useMemberInfo();
  const { openModal, closeModal } = useModal();

  const myid = getMyId();
  const params = useParams();

  const [isReceiveButtonDisabled, setIsReceiveButtonDisabled] = useState(false);
  const [isEndButtonDisabled, setIsEndButtonDisabled] = useState(false);
  const [isGuestButtonDisabled, setIsGuestButtonDisabled] = useState(false);

  console.log('넘어노나', detail);
  //host api post
  const createHostClosed = async () => {
    try {
      await createHostClosedPost(String(params.roomId));
    } catch (err) {
      console.log(err);
    } finally {
      setIsEndButtonDisabled(true);
    }
  };
  const createHostDelivered = async () => {
    try {
      await createHostDeliveredPost(String(params.roomId));
    } catch (err) {
      console.log(err);
    } finally {
      setIsReceiveButtonDisabled(true);
    }
  };

  //host 버튼 클릭
  const handleClickHostButton = (title: string) => {
    title === '배달'
      ? openModal({
          ...MODAL_DATA_HOST.receiveModal,
          positiveCallback: () => {
            createHostDelivered();
          },
          negativeCallback: () => {
            closeModal();
          }
        })
      : openModal({
          ...MODAL_DATA_HOST.participationEndsdModal,
          positiveCallback: () => {
            createHostClosed();
          },
          negativeCallback: () => {
            closeModal();
          }
        });
  };

  //guest modal data
  const changeModalGuest = isRemitted(myid)
    ? MODAL_DATA_GUEST.receiveModal
    : MODAL_DATA_GUEST.sendModal;

  //guest api post
  const createGuestPost = async () => {
    try {
      if (isRemitted(myid)) {
        await createGuestReceivedPost(String(params.roomId));
      } else {
        await createGuestRemittedPost(String(params.roomId));
      }
    } catch (err) {
      console.log(err);
    } finally {
      if (isRemitted(myid)) {
        setIsGuestButtonDisabled(true);
      }
    }
  };

  //guest 버튼 클릭
  const handleClickGuestButton = () => {
    openModal({
      ...changeModalGuest,
      positiveCallback: () => {
        createGuestPost();
      },
      negativeCallback: () => {
        closeModal();
      }
    });
  };

  const deadLineTime = detail?.deadline.split('T')[1].split(':', 2);
  const deadLineHour =
    deadLineTime &&
    (Number(deadLineTime[0]) > 12 ? `PM ${Number(deadLineTime[0]) - 12}` : `AM ${deadLineTime[0]}`);
  const deadLineMinute = deadLineTime && `${deadLineTime[1]}`;
  const deadLineText = `${deadLineHour}:${deadLineMinute} 까지`;

  const roomInfo = {
    bankName: BANKS[detail?.bankName as TBankKey],
    account: detail?.account,
    deadLine: deadLineText
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
        <CopyToClipboard text={`${roomInfo.bankName} ${roomInfo.account}`}>
          <StyledAcountNumber>
            {roomInfo.bankName} {roomInfo.account}
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
        <div>{roomInfo.deadLine}</div>
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
          disabled={isGuestButtonDisabled}
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
  div:nth-child(2) {
    font-weight: 700;
  }
`;
const StyledDetailTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
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
