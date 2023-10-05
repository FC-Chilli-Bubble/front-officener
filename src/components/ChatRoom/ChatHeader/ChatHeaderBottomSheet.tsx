import styled from 'styled-components';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';

import BottomSheetModal from '@/components/Common/BottomSheetModal';
import { MODAL_DATA_GUEST, MODAL_DATA_HOST } from '@/constants/chatRoomModalData';
import { isBottomsheetOpenAtom } from '@/states/chatBottomSheetAtom';
import { useModal } from '@/hooks/useModal';
import { useMemberInfo } from '@/hooks/useMemberInfo';
import { createKickRequestPost, createExitPost } from '@/apis/ChatRoom/ChatExitApis';
import { IErrorResponse } from '@/types/Common/IErrorResponse';

const ChatHeaderBottomSheet = () => {
  const { openModal, closeModal } = useModal();
  const { isHost, getMyId, isAllReceived } = useMemberInfo();

  const [isBottomsheetOpen, setIsBottomsheetOpen] = useRecoilState(isBottomsheetOpenAtom);
  const myid = getMyId();
  const amIHost = isHost(myid);
  const params = useParams();

  const closeBottomSheet = () => {
    setIsBottomsheetOpen(false);
  };
  console.log('isAllReceived😍 :', isAllReceived());
  console.log('amIHost😍 :', amIHost);

  const handleClickModalExitHost = useCallback(() => {
    if (isAllReceived()) {
      //모두가 수령했을때
      openModal({
        ...MODAL_DATA_HOST.exitModal,
        positiveCallback: () => {
          //나가기 api
          createExitPost(String(params.roomId)).then(
            response => {
              const responseData = response.message;
              console.log(responseData);
            },
            (error: IErrorResponse) => {
              console.log(error.errorMessage);
            }
          );
        },
        negativeCallback: () => {
          closeModal();
        }
      });
    } else {
      //모두 수령전
      openModal({
        ...MODAL_DATA_HOST.exileExitModal,
        positiveCallback: () => {
          // 나가기 요청 api
          createKickRequestPost(String(params.roomId)).then(
            response => {
              const responseData = response.message;
              console.log(responseData);
              openModal({
                ...MODAL_DATA_HOST.exitModal,
                positiveCallback: () => {
                  //나가기 api
                  createExitPost(String(params.roomId)).then(
                    response => {
                      const responseData = response.message;
                      console.log(responseData);
                    },
                    (error: IErrorResponse) => {
                      console.log(error.errorMessage);
                    }
                  );
                },
                negativeCallback: () => {
                  closeModal();
                }
              });
            },
            (error: IErrorResponse) => {
              console.log(error.errorMessage);
            }
          );
        },
        negativeCallback: () => {
          closeModal();
        }
      });
    }
  }, [isAllReceived, openModal, closeModal]);

  const handleClickModalExitGuest = useCallback(() => {
    if (isAllReceived()) {
      //모두가 수령했을때
      openModal({
        ...MODAL_DATA_GUEST.afterExitModal,
        positiveCallback: () => {
          //나가기 api
          createExitPost(String(params.roomId)).then(
            response => {
              const responseData = response.message;
              console.log(responseData);
            },
            (error: IErrorResponse) => {
              console.log(error.errorMessage);
            }
          );
        },
        negativeCallback: () => {
          closeModal();
        }
      });
    } else {
      //모두 수령 전
      openModal({
        ...MODAL_DATA_GUEST.exitModal,
        positiveCallback: () => {
          // 나가기 요청 api
          createKickRequestPost(String(params.roomId)).then(
            response => {
              const responseData = response.message;
              console.log(responseData);
              openModal({
                ...MODAL_DATA_GUEST.afterExitModal,
                positiveCallback: () => {
                  //나가기 api
                  createExitPost(String(params.roomId)).then(
                    response => {
                      const responseData = response.message;
                      console.log(responseData);
                    },
                    (error: IErrorResponse) => {
                      console.log(error.errorMessage);
                    }
                  );
                },
                negativeCallback: () => {
                  closeModal();
                }
              });
            },
            (error: IErrorResponse) => {
              console.log(error.errorMessage);
            }
          );
        },
        negativeCallback: () => {
          closeModal();
        }
      });
    }
  }, [isAllReceived, openModal, closeModal]);

  const handleClickExit = () => {
    closeBottomSheet();
    amIHost ? handleClickModalExitHost() : handleClickModalExitGuest();
  };

  return (
    <BottomSheetModal
      isOpen={isBottomsheetOpen}
      onClose={closeBottomSheet}>
      {
        <StyledSheetContainer>
          <StyledCancelButton onClick={closeBottomSheet}>취소</StyledCancelButton>
          <StyledSheetBox>알림끄기</StyledSheetBox>
          <StyledSheetBox onClick={handleClickExit}>채팅방 나가기</StyledSheetBox>
        </StyledSheetContainer>
      }
    </BottomSheetModal>
  );
};
const StyledSheetContainer = styled.div`
  position: relative;
  padding: 34px 16px 9px 16px;
`;
const StyledCancelButton = styled.div`
  position: absolute;
  right: 27px;
  top: 7px;
  color: ${({ theme }) => theme.colors.grayColor11};
  cursor: pointer;
`;
const StyledSheetBox = styled.div`
  text-align: center;
  padding: 16px 15px;
  cursor: pointer;

  &:nth-child(2) {
    border-bottom: 0.3px solid ${({ theme }) => theme.colors.barBorderColor};
  }
`;

export default ChatHeaderBottomSheet;
