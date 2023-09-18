import { styled } from 'styled-components';

import Header from '@/components/Common/Header';
import Button from '@/components/Common/Button';
import BottomSheetModal from '@/components/Common/BottomSheetModal';
import { useState } from 'react';
import ChoiceCard from '@/components/Common/Elevator/ChoiceCard';
import MissingCard from '@/components/Common/Elevator/MissingCard';
import FloorList from '@/components/Common/Elevator/FloorList';

const ElevatorHome = () => {
  const [isOpen, setOpen] = useState(false);

  const handleElevatorSetting = () => {
    setOpen(true);
  };

  // 바텀시트 닫기
  const closeBottomSheet = () => {
    setOpen(false);
  };

  return (
    <StyledLayout>
      <Header
        leftIcon="back"
        title="엘리베이터"
      />
      <StyledContainer>
        <StyledStyledElevatorSetting>
          <StyledElevatorTitle>오산 테라타워</StyledElevatorTitle>
          {/* <ElevatorNumber>1호기,2호기,3호기,4호기</ElevatorNumber> */}
          <StyledSettingButton>
            <Button
              size="small"
              type="primary"
              title="엘리베이터 설정"
              onClick={() => {
                handleElevatorSetting();
              }}
            />
            <BottomSheetModal
              isOpen={isOpen}
              onClose={() => setOpen(false)}>
              <>
                <button
                  onClick={() => {
                    setOpen(false);
                  }}>
                  닫기
                </button>
                <FloorList closeSheet={closeBottomSheet} />
              </>
            </BottomSheetModal>
          </StyledSettingButton>
        </StyledStyledElevatorSetting>
        <StyledElevators>
          {/* <MissingCard />
          <MissingCard />
          <MissingCard />
          <MissingCard /> */}
          <ChoiceCard />
        </StyledElevators>
      </StyledContainer>
    </StyledLayout>
  );
};

const StyledContainer = styled.div`
  padding: 0 20px;
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
  font-size: 25px;
  text-align: center;
  font-weight: bold;
`;

const StyledSettingButton = styled.div`
  margin-top: 30px;
`;

const StyledElevators = styled.ul`
  margin-top: 37px;
  display: grid;
  grid-template-rows: repeat(2, 217px);
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  gap: 10px 10px;
  padding: 5px 5px;
  justify-items: center;
  div {
    width: 100%;
    max-width: 200px;
  }
`;

export default ElevatorHome;
