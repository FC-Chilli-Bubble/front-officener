import { styled } from 'styled-components';

import Header from '@/components/Common/Header';
import Button from '@/components/Common/Button';
import { DummyElevators } from './Dummydata';

const ElevatorHome = () => {
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
                console.log('click test');
              }}
            />
          </StyledSettingButton>
        </StyledStyledElevatorSetting>
        <StyledElevators>
          {DummyElevators?.map(elevator => (
            <Elevator>
              <div>
                <h2>{elevator.elevatorId}</h2>
                <h2>{elevator.floor}</h2>
                <h2>{elevator.direction}</h2>
              </div>
            </Elevator>
          ))}
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
`;

const StyledSettingButton = styled.div`
  margin-top: 30px;
`;

const StyledElevators = styled.ul`
  background-color: royalblue;
  margin-top: 37px;
  display: grid;
  grid-template-rows: repeat(2, 217px);
  grid-template-columns: repeat(2,  1fr);
  text-align: center;
  gap: 10px 10px;
  padding: 5px 5px;
  justify-items: center;

  h2 {
    color: gray;
    margin-top: 17px;
  }
`;

const Elevator = styled.li`
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  max-width: 200px;
`;

export default ElevatorHome;
