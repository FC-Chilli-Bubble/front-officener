import styled from 'styled-components';
import Stop from '@/assets/icon_elevatorStop.svg';
import Up from '@/assets/icon_elevatorUp.svg';
import Down from '@/assets/icon_elevatorDown.svg';
import { IObjectElevator } from '@/types/Common/Elevator/Ielevator';

type TChoiceCardProps = {
  elevator: IObjectElevator;
};

const ChoiceCard = ({ elevator }: TChoiceCardProps) => {
  const ElevatorSetting = (direction: string | null) => {
    if (direction === 'DOWN') {
      return <img src={Down} />;
    }
    if (direction === 'UP') {
      return <img src={Up} />;
    }
    {
      return <img src={Stop} />;
    }
  };

  return (
    <StyledElevator
      key={elevator.id}
      status={elevator.status}>
      <div className="title">
        <h2>{elevator.id}호기</h2>
      </div>
      <SyledInfo>
        {elevator.floor && <h2>{elevator.floor}</h2>}
        {ElevatorSetting(elevator.direction)}
      </SyledInfo>
      <StyledStatus status={elevator.status}>
        <p className="full">만원</p>
        <p className="repair">수리중</p>
      </StyledStatus>
    </StyledElevator>
  );
};

const StyledElevator = styled.li<{ status: string }>`
  width: 100%;
  max-width: 200px;
  border: 1px solid
    ${({ status, theme }) =>
      status === 'full'
        ? theme.colors.redColor0
        : status === 'REPAIR'
        ? theme.colors.white
        : theme.colors.marinblueColor};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.dropShadow.depth2};
  display: flex;
  flex-direction: column;
  padding: 14px 0 40px;

  .title {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.grayColor6};
    font-weight: 400;
  }
`;

const SyledInfo = styled.div`
  margin-top: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  h2 {
    text-align: center;
    font-size: 64px;
    font-weight: 900;
    margin-right: 10px;
  }
`;

const StyledStatus = styled.div<{ status: string }>`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0 0;

  p {
    font-size: 24px;
    font-weight: 600;
    &.full {
      color: ${({ status, theme }) =>
        status === 'full' ? theme.colors.redColor0 : theme.colors.grayColor3};
    }

    &.repair {
      color: ${({ status, theme }) =>
        status === 'REPAIR' ? theme.colors.marinblueColor : theme.colors.grayColor3};
    }
  }
`;

export default ChoiceCard;
