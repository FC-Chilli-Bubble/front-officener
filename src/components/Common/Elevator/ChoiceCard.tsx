import Stop from 'assets/icon_elevatorStop.svg';
import Up from 'assets/icon_elevatorUp.svg';
import Down from 'assets/icon_elevatorDown.svg';
import { DummyElevators } from '@/pages/Elevator/Dummydata';
import styled from 'styled-components';

interface IObjectElevators {
  elevatorId: number;
  floor?: number | undefined;
  direction: "stop" | "up" | "down";
  status: "normal" | "repair" | "full";
}

type TChoiceCardProps = {
  elevator: IObjectElevators;
};

const ChoiceCard = ({ elevator }: TChoiceCardProps) => {
  const ElevatorSetting = (direction: string) => {
    if (direction === 'stop') {
      return <img src={Stop} />;
    } else if (direction === 'up') {
      return <img src={Up} />;
    } else {
      return <img src={Down} />;
    }
  };

  return (
    <StyledElevator key={elevator.elevatorId}>
      <div className="title">
        <h2>{elevator.elevatorId}호기</h2>
      </div>
      <div className="elevatorInfo">
        <h2>{elevator.floor}</h2>
        <p>{ElevatorSetting(elevator.direction)}</p>
      </div>
      <StyledStatus status={elevator.status}>
        <p className='full'>만원</p>
        <p className='repair'>수리중</p>
      </StyledStatus>
    </StyledElevator>
  );
};

const StyledElevator = styled.li`
  width: 100%;
  max-width: 200px;
  border: 1px solid ${({ theme }) => theme.colors.marinblueColor};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.dropShadow.depth3};
  .title {
    color: ${({ theme }) => theme.colors.grayColor6};
    margin-top: 17px;
  }
  .elevatorInfo {
    margin-top: 17px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 60px;
      font-weight: bold;
      margin-right: 10px;
    }
  }
`;

const StyledStatus = styled.div<{ status: string; }>`

  height: 60px;
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;

    p {
      font-size: 25px;
      font-weight: 400;

      &.full {
        color: ${({ status, theme }) => status === "full" ? theme.colors.redColor0 : theme.colors.grayColor3};
      }

      &.repair {
        color: ${({ status, theme }) => status === 'repair' ? theme.colors.marinblueColor : theme.colors.grayColor3};
      }
    }
`;

export default ChoiceCard;
