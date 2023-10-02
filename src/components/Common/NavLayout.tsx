import { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import BottomNavigation from '@/components/Common//BottomNavigation';

const NavLayout = () => {
  const isIos = useMemo(() => /iPhone|iPad|iPod/i.test(navigator.userAgent), []);

  return (
    <StyledLayout>
      <StyledContainer>
        <StyledBox isIos={isIos}>
          <Outlet />
        </StyledBox>
        <BottomNavigation />
      </StyledContainer>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  position: relative;
  height: inherit;
  max-width: 560px; // 협의 필요
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledContainer = styled.div`
  height: 100%;
  position: relative;
`;

const StyledBox = styled.div<{ isIos: boolean; }>`
  height:${({ isIos }) => isIos ? 'calc(100% - 90px)' : 'calc(100% - 56px)'}; 
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export default NavLayout;
