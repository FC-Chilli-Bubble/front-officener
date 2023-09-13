import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import IconArrowRight from '@/assets/ico_chevron_right.svg';

type TMyPageMenuProps = {
  title: string,
  path: string;
};

const MyPageMenu = React.memo(({ title, path }: TMyPageMenuProps) => {
  return (
    <li>
      <StyledMenu to={path}>
        <h4>{title}</h4>
        <img src={IconArrowRight} />
      </StyledMenu>
    </li>
  );
});

const StyledMenu = styled(Link)`
  width: 100%;
  height: 62px;
  padding:  0 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayColor1} ;

  h4 {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.grayColor9};
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export default MyPageMenu;