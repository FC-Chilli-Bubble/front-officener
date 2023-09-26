import React from 'react';
import styled from 'styled-components';

import TestImage from '@/assets/food/Rectangle 496.svg';

type TMenuLinkCardProps = {
  menuLink: string,
  storeName: string;
};

const MenuLinkCard = ({ menuLink, storeName }: TMenuLinkCardProps) => {
  return (
    <StyledPhotoCard>
      <MenuText>메뉴판</MenuText>
      <a href={menuLink}>
        <img
          src={TestImage}
          alt="Food Photo"
        />
      </a>
      <StoreName>{storeName}</StoreName>
    </StyledPhotoCard>
  );
};

const StyledPhotoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px 34px;

  img {
    width: 100%;
    height: calc(100% / 324 * 170);
    display: block;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
`;

const MenuText = styled.h2`
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  color: ${props => props.theme.colors.grayColor5};
  text-align: left;
  padding: 10px 0 14px 10px;
`;

const StoreName = styled.h3`
  font-size: 16px;
  background-color: ${props => props.theme.colors.grayColor1};
  color: ${props => props.theme.colors.black};
  padding-top: 0;
  width: 100%;
  border-radius: 0 0 20px 20px;
  display: flex;
  align-items: center;
  padding: 20px 30px;
`;

export default MenuLinkCard;
