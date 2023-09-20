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
  <StyledButtonBox >
    {buttonState !== ButtonStates.ACTIONS ? (
      <StyledDeliveryTogetherButton onClick={handleButtonClick}>
        {buttonState}
      </StyledDeliveryTogetherButton>
    ) : (
      <StyledHostButtons>
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
        <StyledActionButton className='cta' onClick={handleButtonClick}>채팅창 참여</StyledActionButton>
      </StyledHostButtons>
    )}
  </StyledButtonBox>
);

const StyledButtonBox = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.1);
  height: 100px;
  bottom: 0;
  padding: 21px;
  z-index: 100;
  position: absolute;
`;

const StyledDeliveryTogetherButton = styled.button`
  background-color: ${props => props.theme.colors.marinblueColor};
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
`;

const StyledHostButtons = styled.div`
  display: flex;
  gap: 10px;
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
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &.cta {
    flex-grow: 1;
  }
`;

export default FooterButtons;
