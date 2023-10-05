import { styled } from 'styled-components';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import Header from '@/components/Common/Header';
import Button from '@/components/Common/Button';
import BottomSheetModal from '@/components/Common/BottomSheetModal';
import ChoiceCard from '@/components/Elevator/ChoiceCard';
import ElevatorTagList from '@/components/Elevator/ElevatorTagList';
import { featchElevators } from '@/apis/Elevator/elevatorRequests';
import { IObjectElevator } from '@/types/Elevator/IElevator';
import MissingCard from '@/components/Elevator/MissingCard';
import { useModal } from '@/hooks/useModal';
import MODAL_DATAS from '@/constants/modalDatas';
import { userInfoAtom } from '@/states/userDataAtom';
import { elevatorAtom } from '@/states/elevatorAtom';

const ElevatorHome = () => {
  const [isOpen, setOpen] = useState(false);
  const [elevatorList, setElevatorList] = useState<IObjectElevator[]>([]);
  const [allElevatorList, setAllElevatorList] = useState<IObjectElevator[]>([]);
  const setSavedTags = useSetRecoilState(elevatorAtom);
  const { openModal } = useModal();
  const navigate = useNavigate();
  const user = useRecoilValue(userInfoAtom);

  const handleClickClose = () => {
    navigate(-1);
  };

  const handleElevatorSetting = (e?: React.MouseEvent<HTMLElement>) => {
    e?.stopPropagation();
    setOpen(true);
  };

  // 바텀시트 닫기
  const closeBottomSheet = (isUpdated: boolean) => {
    if (isUpdated) {
      getElevator();
    }
    setOpen(false);
  };

  // 엘리베이터 목록 조회 API
  const getElevator = useCallback(
    async () => {
      try {
        const res = await featchElevators();
        setAllElevatorList(res.allElevators);
        setElevatorList(res.userElevators.sort((a, b) => a.id - b.id));
        setSavedTags(res.userElevators.map(elevator => elevator.id));
      } catch (error) {
        openModal({
          ...MODAL_DATAS.ELEVATOR_FETCH_FAILURE,
          positiveCallback: () => {
            navigate(-1);
          }
        });
      }
    },
    [openModal, navigate],
  );

  const handleCloseBottomSheet = () => {
    setOpen(false);
  };

  useEffect(() => {
    getElevator();
  }, [getElevator]);

  return (
    <StyledLayout>
      <Header
        leftIcon="back"
        title="엘리베이터"
        leftIconClick={handleClickClose}
      />
      <StyledContainer onClick={handleCloseBottomSheet}>
        <StyledStyledElevatorSetting>
          <StyledElevatorTitle>{user.userInfo.building.buildingName}</StyledElevatorTitle>
          <StyledSettingButton>
            <Button
              size="small"
              type="primary"
              title="엘리베이터 설정"
              onClick={handleElevatorSetting}
            />
            <BottomSheetModal
              isOpen={isOpen}
              onClose={() => setOpen(false)}>
              {
                allElevatorList && <ElevatorTagList elevators={allElevatorList} closeSheet={closeBottomSheet} />
              }
            </BottomSheetModal>
          </StyledSettingButton>
        </StyledStyledElevatorSetting>
        <StyledElevators>
          {elevatorList.length > 0 ? (
            elevatorList.map(elevator => <ChoiceCard elevator={elevator} />)
          ) : (
            <>
              <MissingCard />
              <MissingCard />
              <MissingCard />
              <MissingCard />
            </>
          )}
        </StyledElevators>
      </StyledContainer>
    </StyledLayout>
  );
};

const StyledContainer = styled.div`
  padding: 0 20px 56px;
`;
const StyledLayout = styled.div``;

const StyledStyledElevatorSetting = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledElevatorTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  font-weight: 600;
`;

const StyledSettingButton = styled.div`
  margin-top: 30px;
`;

const StyledElevators = styled.ul`
  margin-top: 37px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  gap: 14px;
  justify-items: center;
`;

export default ElevatorHome;
