import { styled } from 'styled-components';

import { NAV_MENU } from '@/constants/commonUiData';
import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';


const BottomNavigation = () => {
  const pathName = useLocation().pathname;
  const currentPath = useMemo(() => pathName === '/' ? '/home' : pathName, [pathName]);

  return (
    <StyledNav>
      <ul>
        {
          NAV_MENU.map(nav => (
            <li key={nav.name}>
              <StyledNavItem to={nav.path} $isActive={currentPath.includes(nav.name)}>
                <img src={currentPath.includes(nav.name) ? nav.active : nav.inactive} />
                <div>{nav.title}</div>
              </StyledNavItem>
            </li>)
          )
        }
      </ul>
    </StyledNav >
  );
};

const StyledNav = styled.nav`
  width: 100%; 
  height: 56px; 
  padding: 9px 0 7px;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 0.3px solid ${({ theme }) => theme.colors.barBorderColor};
  position: sticky;
  bottom: 0;
  z-index: 1000;

  ul {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;

const StyledNavItem = styled(Link) <{ $isActive: boolean; }>`
  display: flex;
  flex-direction: column;
  width: 84px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  gap: 10px;

  img {
    width: 20px;
    height: 20px;
  }

  div {
    font-size: 10px;
    color: ${({ $isActive, theme }) => $isActive ? theme.colors.black : theme.colors.grayColor3};
  }
`;

export default BottomNavigation; 