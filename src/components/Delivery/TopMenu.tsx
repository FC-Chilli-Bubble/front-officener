import React from 'react';
import styled from 'styled-components';

interface ITopMenuProps {
  selectedMenu: string;
  handleMenuClick: (_menu: string) => void;
}

const TopMenu: React.FC<ITopMenuProps> = ({ selectedMenu, handleMenuClick }) => {
  return (
    <StyledMenu>
      <TopMenuButton
        className={selectedMenu === '함께배달' ? 'active' : ''}
        onClick={() => handleMenuClick('함께배달')}>
        함께배달
      </TopMenuButton>
      <TopMenuButton
        className={selectedMenu === '내가 참여한 배달' ? 'active' : ''}
        onClick={() => handleMenuClick('내가 참여한 배달')}>
        내가 참여한 배달
      </TopMenuButton>
      <TopMenuButton
        className={selectedMenu === '나의 채팅' ? 'active' : ''}
        onClick={() => handleMenuClick('나의 채팅')}>
        나의 채팅
      </TopMenuButton>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  text-align: center;
`;

// 상단 탭 스타일
const TopMenuButton = styled.button`
  position: relative;
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;
  color: ${props => props.theme.colors.grayColor5};

  &.active {
    color: ${props => props.theme.colors.marinblueColor};

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 48px;
      height: 4px;
      background-color: ${props => props.theme.colors.marinblueColor};
      border-radius: 5px;
    }
  }
`;

export default TopMenu;
