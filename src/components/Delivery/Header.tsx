import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  selectedMenu: string;
}

const Header: React.FC<HeaderProps> = ({ selectedMenu }) => {
  return (
    <StyledHeader>
      <StyledP isVisible={selectedMenu === '함께배달'}>같은 건물 사람들과 배달비 걱정 없이</StyledP>
      <StyledP isVisible={selectedMenu === '함께배달'}>맛있는 한 끼를 주문해보세요!</StyledP>
      <h3>{getHeaderText(selectedMenu)}</h3>
    </StyledHeader>
  );
};

const getHeaderText = (menu: string) => {
  switch (menu) {
    case '함께배달':
      return '함께 배달하기';
    case '내가 참여한 배달':
      return '내가 참여한 배달';
    case '나의 채팅':
      return '나의 채팅';
    default:
      return '';
  }
};

const StyledHeader = styled.div`
  background-image: none;
  width: 100%;
  padding: 204px 0 15px 25px;
  background-image: url('src/assets/food/IMG2345.svg');
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
    padding: 0 0 5px 0;
  }
`;

const StyledP = styled.p<{ isVisible: boolean }>`
  color: ${props => props.theme.colors.primaryPressedColor};
  font-size: 12px;
  margin-bottom: 5px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;
export default Header;
