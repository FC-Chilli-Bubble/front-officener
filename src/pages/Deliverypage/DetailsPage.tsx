import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { foodData } from './dummyData';

interface IFoodData {
  사진?: string;
  가게이름: string;
  참여인원: number;
  배달비: string;
  태그: string[];
  이체해야하는시간: string;
}

enum ButtonStates {
  JOIN_DELIVERY = '함께 배달',
  JOIN_CHAT = '채팅창 참여',
  ACTIONS = 'ACTIONS'
}

const Header: React.FC = () => (
  <StyledHeader>
    <h3>함께 배달시 유의사항</h3>
    <StyledP>- 이체시간을 엄수해주세요!</StyledP>
    <StyledP>- 호스트님께 감사인사를 꼭 해주세요</StyledP>
    <StyledP>- 빠른 응답 부탁드립니다!</StyledP>
  </StyledHeader>
);

const FoodItem: React.FC<{ food: IFoodData }> = ({ food }) => {
  return (
    <StyledFoodCardListStyle>
      <img
        src={food?.사진}
        alt="음식 사진"
      />
      <div>
        <StyledRow>
          <GrayText>가게이름</GrayText> <BlackText>{food?.가게이름}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>참여 인원</GrayText> <BlackText>{food?.참여인원}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>배달비</GrayText> <BlackText>{food?.배달비}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>태그</GrayText> <BlackText>{food?.태그.join(', ')}</BlackText>
        </StyledRow>
        <StyledRow>
          <GrayText>이체 마감 시간</GrayText> <BlackText>{food?.이체해야하는시간}</BlackText>
        </StyledRow>
      </div>
    </StyledFoodCardListStyle>
  );
};

const PhotoCard: React.FC<{ food: IFoodData }> = ({ food }) => {
  return (
    <StyledPhotoCard>
      <MenuText>메뉴판</MenuText>
      <img
        src="src/assets/food/Rectangle 496.svg"
        alt="Food Photo"
      />
      <StoreName>{food?.가게이름}</StoreName>
    </StyledPhotoCard>
  );
};

const HostInfo: React.FC = () => {
  return (
    <StyledHostInfo>
      <h4>호스트 (주문자)</h4> <br />
      <HostDetailContainer>
        <img
          src="src/assets/food/Vector.svg"
          alt="Food Photo"
        />
        <h3>빵먹다살찐떡</h3>
        <h1>우리은행 0000-0000-000</h1>
      </HostDetailContainer>
      <br />
      <h2>추가설명</h2>
      <br />
      <p>
        엽기떡볶이 마라맛 새로 나왔대요!! 배달 같이 시켜요! <br />
        엽기떡볶이 닭볶음탕도 진짜 맛있습니다!
      </p>
    </StyledHostInfo>
  );
};

const FooterButtons: React.FC<{
  buttonState: ButtonStates;
  handleButtonClick: () => void;
  handleDeleteClick: () => void;
}> = ({ buttonState, handleButtonClick, handleDeleteClick }) => (
  <ButtonContainer>
    {buttonState !== ButtonStates.ACTIONS ? (
      <StyledDeliveryTogetherButton onClick={handleButtonClick}>
        {buttonState}
      </StyledDeliveryTogetherButton>
    ) : (
      <>
        <StyledActionButton
          variant="primary"
          onClick={handleButtonClick}>
          수정
        </StyledActionButton>
        <StyledActionButton
          variant="primary"
          onClick={handleDeleteClick}>
          삭제
        </StyledActionButton>
        <StyledActionButton onClick={handleButtonClick}>채팅창 참여</StyledActionButton>
      </>
    )}
  </ButtonContainer>
);

const DeleteModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <StyledModalOverlay>
      <StyledModalContainer>
        <h1>게시글을 정말 삭제하시겠습니까?</h1>
        <p>게시글을 삭제하면 게스트와 소통이 불편해질 수 있어요</p>
        <DeleteButton onClick={onClose}>삭제</DeleteButton>
        <CancelButton onClick={onClose}>취소</CancelButton>
      </StyledModalContainer>
    </StyledModalOverlay>
  );
};

const DetailsPage = () => {
  const [data, setData] = useState<IFoodData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('분식');
  const [buttonState, setButtonState] = useState(ButtonStates.JOIN_DELIVERY);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  useEffect(() => {
    const dummyResponse = foodData[selectedCategory];

    if (dummyResponse && dummyResponse.length > 0) {
      setData(dummyResponse[0]);
    } else {
      console.error(`No data found for category: ${selectedCategory}`);
    }
  }, [selectedCategory]);

  const handleButtonClick = () => {
    switch (buttonState) {
      case ButtonStates.JOIN_DELIVERY:
        setButtonState(ButtonStates.JOIN_CHAT);
        break;
      case ButtonStates.JOIN_CHAT:
        setButtonState(ButtonStates.ACTIONS);
        break;
      case ButtonStates.ACTIONS:
        setButtonState(ButtonStates.JOIN_DELIVERY); // 초기 상태로 돌아가게 설정
        break;
    }
  };

  // 삭제 버튼 클릭 핸들러
  const handleDeleteClick = () => {
    setDeleteModalVisible(true);
  };

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setDeleteModalVisible(false);
  };

  return (
    <>
      <Header />
      <StyledContainer>
        <FoodItem food={data} />
        <PhotoCard food={data} />
        <StyledDivider />
        <HostInfo />
        <FooterButtons
          buttonState={buttonState}
          handleButtonClick={handleButtonClick}
          handleDeleteClick={handleDeleteClick}
        />
        {isDeleteModalVisible && <DeleteModal onClose={handleCloseModal} />}
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.div`
  background-image: none;
  width: 100%;
  padding: 90px 0 112px 25px;
  background-image: url('src/assets/food/IMG1234.svg');
  background-repeat: no-repeat;
  background-position: right bottom;

  background-color: ${props => props.theme.colors.marinblueColor};
  h3 {
    color: ${props => props.theme.colors.white};
    font-size: 25px;
    font-weight: 500;
  }

  p {
    color: ${props => props.theme.colors.primaryPressedColor};
    font-size: 13px;
    padding: 10px 0 0 0;
  }
`;

const StyledP = styled.p`
  color: ${props => props.theme.colors.primaryPressedColor};
  font-size: 12px;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0 0 0;
`;

const GrayText = styled.h1`
  width: 100px;
  text-align: left;
  color: ${props => props.theme.colors.grayColor10};
  display: inline-block;
`;

const BlackText = styled.p`
  color: black;
  display: inline-block;
  padding-left: 10px;
`;

const StyledFoodCardListStyle = styled.div`
  padding: 10px;
  margin: 10px 5px;
  display: flex;
  align-items: start;
  gap: 10px;

  > img {
    flex-shrink: 0;
    width: 150px;
    height: 150px;
    border-radius: 15px;
    object-fit: cover;
  }

  > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const StyledPhotoCard = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 330px;
    height: 150px;
    display: block;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }
`;

const MenuText = styled.h2`
  color: ${props => props.theme.colors.grayColor10};
  text-align: left;
  padding: 10px;
`;

const StoreName = styled.h3`
  background-color: ${props => props.theme.colors.grayColor1};
  color: black;
  padding-top: 0;
  width: 330px;
  height: 50px;
  border-radius: 0 0 15px 15px;
  display: flex;
  align-items: center;
  padding: 0 0 0 25px;
`;

const StyledDivider = styled.div`
  width: 100%;
  margin: 15px 0 15px 0;
  height: 15px;
  background-color: ${props => props.theme.colors.grayColor1};
`;

const StyledHostInfo = styled.div`
  padding: 10px 0 0 25px;
  border-radius: 15px;
  align-self: flex-start;
  position: relative;
  height: 300px;

  h4 {
    color: ${props => props.theme.colors.grayColor10};
    font-size: 14px;
    font-weight: 500;
  }
  h3 {
    font-size: 14px;
    font-weight: 400;
    padding-left: 10px;
  }
  h2 {
    color: ${props => props.theme.colors.grayColor10};
    font-size: 14px;
    font-weight: 500;
  }
  h1 {
    font-size: 14px;
    font-weight: 700;
    padding-left: 40px;
  }
  p {
    color: black;
    font-size: 12px;
  }
`;

const HostDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

const StyledDeliveryTogetherButton = styled.button`
  background-color: ${props => props.theme.colors.marinblueColor};
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  width: 340px;
  height: 60px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
`;

const StyledActionButton = styled.button`
  background-color: ${props =>
    props.variant === 'primary' ? props.theme.colors.white : props.theme.colors.marinblueColor};
  color: ${props =>
    props.variant === 'primary' ? props.theme.colors.marinblueColor : props.theme.colors.white};
  border: ${props =>
    props.variant === 'primary' ? `1px solid ${props.theme.colors.marinblueColor}` : 'none'};

  padding: 10px 20px;
  height: 48px;
  margin: 5px;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
`;

// 모달 스타일
const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const StyledModalContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 300px;
  text-align: center;

  h1 {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    padding: 10px 0;
  }

  p {
    font-size: 12px;
    font-weight: 500;
    margin: 10px 0;
    color: ${props => props.theme.colors.grayColor10};
  }

  button {
    margin: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    width: 40%;
    border: 1px solid ${props => props.theme.colors.marinblueColor};
    cursor: pointer;
    font-size: 16px;
  }
`;

const DeleteButton = styled.button`
  background-color: ${props => props.theme.colors.marinblueColor};
  color: ${props => props.theme.colors.white};
`;

const CancelButton = styled.button`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.marinblueColor};
`;

export default DetailsPage;
