import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars
enum ButtonStates {
  // eslint-disable-next-line no-unused-vars
  JOIN_DELIVERY = '함께 배달',
  // eslint-disable-next-line no-unused-vars
  JOIN_CHAT = '채팅창 참여',
  // eslint-disable-next-line no-unused-vars
  ACTIONS = 'ACTIONS'
}
type StyledActionButtonProps = {
  variant?: 'primary' | 'default';
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

const StyledActionButton = styled.button<StyledActionButtonProps>`
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

export default FooterButtons;
