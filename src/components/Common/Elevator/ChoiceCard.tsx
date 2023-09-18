import Stop from 'assets/icon_elevatorStop.svg';
import Up from 'assets/icon_elevatorUp.svg';
import Down from 'assets/icon_elevatorDown.svg';
import { DummyElevators } from '@/pages/Elevator/Dummydata';
import styled from 'styled-components';

interface IPropsStatus {
  full: string;
  repair: string;
  normal: string;
}

interface IObjectElevators {
  elevatorId: number;
  floor: number | undefined;
  direction: string;
  status: IPropsStatus;
}

const ChoiceCard = () => {
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
    <>
      {DummyElevators.map(elevator => (
        <div key={elevator.status}>
          <StyledElevator>
            <div className="title">
              <h2>{elevator.elevatorId}호기</h2>
            </div>
            <div className="elevatorInfo">
              <h2>{elevator.floor}</h2>
              <p>{ElevatorSetting(elevator.direction)}</p>
            </div>
            <div
              className="status"
              key={elevator.status}>
              <p>만원</p>
              <p>수리중</p>
            </div>
          </StyledElevator>
        </div>
      ))}
    </>
  );
};

const StyledElevator = styled.li`
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
  .status {
    height: 60px;
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    p {
      color: ${({ theme }) => theme.colors.grayColor3};
      font-size: 25px;
      font-weight: 400;
    }
  }
`;

export default ChoiceCard;
