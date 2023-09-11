import Header from '@/components/Common/Header';
import { styled } from 'styled-components';

const ElevatorHome = () => {
  return (
    <StyledLayout>
      <StyledContainer>
        <Header
          leftIcon="back"
          title="엘리베이터"
        />
        <ElevatorSetting>
          <ElevatorTitle>오산 테라타워</ElevatorTitle>
          {/* <ElevatorNumber>1호기,2호기,3호기,4호기</ElevatorNumber> */}
          <SettingButton>엘리베이터 설정</SettingButton>
        </ElevatorSetting>
        <Elevators></Elevators>
      </StyledContainer>
    </StyledLayout>
  );
};

const StyledContainer = styled.div`
  padding: 0 20px;
`;
const StyledLayout = styled.div``;

const ElevatorSetting = styled.div`
  background-color: yellow;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const ElevatorTitle = styled.h2`
  font-size: 25px;
  text-align: center;
`;

const SettingButton = styled.div`
  background-color: blanchedalmond;
  display: flex;
  width: 220px;
  height: 50px;
  margin-top: 30px;
`;

const Elevators = styled.div`
  background-color: royalblue;
  width: 350px;
  height: 300px;
  margin-top: 70%;
`;
export default ElevatorHome;
