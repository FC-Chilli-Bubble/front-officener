import React from 'react';
import styled from 'styled-components';

import HeaderBg from '@/assets/food/img_delivery_bg.svg';
import HeaderPoint from '@/assets/food/img_delivery_header.svg';

interface HeaderProps {
  selectedMenu: string;
}

const Header: React.FC<HeaderProps> = ({ selectedMenu }) => {
  return (
    <StyledHeader bgImage={HeaderBg}>
      {selectedMenu === '함께배달' && (
        <>
          <img src={HeaderPoint} />
          <div>
            <p>같은 건물 사람들과 배달비 걱정 없이</p>
            <p>맛있는 한 끼를 주문해보세요!</p>
          </div>
        </>
      )}
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

const StyledHeader = styled.div<{ bgImage: string }>`
  background-image: none;
  width: 100%;
  height: 254px;
  padding: 0 23px 21px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10px;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-repeat: no-repeat;
  background-position: right bottom;
  background-color: ${props => props.theme.colors.marinblueColor};
  position: relative;

  img {
    position: absolute;
    left: 6px;
    bottom: 12px;
  }

  h3 {
    color: ${props => props.theme.colors.white};
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
  }

  p {
    color: #bcd1ff;
    font-size: 14px;
    margin-bottom: 5px;
  }

  :last-child {
    margin-bottom: 0px;
  }
`;
export default Header;
