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
          <TextContainer>
            <ElevatorTitle>오산 테라타워</ElevatorTitle>
            <ElevatorNumber>1호기,2호기,3호기,4호기</ElevatorNumber>
          </TextContainer>
          <SettingButton>엘리베이터 설정</SettingButton>
        </ElevatorSetting>
        <Elevators></Elevators>
      </StyledContainer>
    </StyledLayout>
  );
};

const StyledContainer = styled.div`
  padding: 0 16px;
`;
const StyledLayout = styled.div``;

const ElevatorSetting = styled.div`
  background-color: yellow;
  position: absolute;
  height: 110px;
  width: 300px;
  margin: 10px 10%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

const ElevatorTitle = styled.h2`
  display: flex;
  font-size: 25px;
  justify-content: center;
`;
const ElevatorNumber = styled.span`
  display: flex;
  justify-content: center;
`;

const SettingButton = styled.div`
  background-color: blanchedalmond;
  position: absolute;
  display: flex;
  width: 220px;
  height: 50px;
  margin: 70px 12%;
`;

const Elevators = styled.div`
  background-color: royalblue;
  width: 350px;
  height: 300px;
  margin-top: 70%;
`;
export default ElevatorHome;
