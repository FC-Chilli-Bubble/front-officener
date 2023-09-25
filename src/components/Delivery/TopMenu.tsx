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
      <StyledDivider />
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  position: sticky;
  top: 0;
  text-align: center;
  z-index: 1000;
  background-color: ${props => props.theme.colors.white};
`;

// 상단 탭 스타일
const TopMenuButton = styled.button`
  font-size: 14px;
  font-weight: 400;
  position: relative;
  padding: 5px 20px;
  margin: 0 5px;
  height: 40px;
  line-height: 40px;
  border: none;
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;
  opacity: 0.4;

  &.active {
    color: ${props => props.theme.colors.marinblueColor};
    opacity: 1;
    font-size: 16px;
    font-weight: 700;

    &:after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 50%;
      transform: translateX(-50%);
      width: 48px;
      height: 4px;
      background-color: ${props => props.theme.colors.marinblueColor};
      border-radius: 5px;
    }
  }
`;

const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.grayColor1};
`;

export default TopMenu;
