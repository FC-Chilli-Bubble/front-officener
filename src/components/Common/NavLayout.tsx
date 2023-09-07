import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import BottomNavigation from './BottomNavigation';

const NavLayout = () => {
  return (
    <StyledLayout>
      <StyledContainer>
        <StyledBox>
          <Outlet />
        </StyledBox>
        <BottomNavigation />
      </StyledContainer>
    </StyledLayout>
  );
};

const StyledLayout = styled.section`
  position: relative;
  height: inherit;
  max-width: 560px; // 협의 필요
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

const StyledBox = styled.div`
  flex-grow: 1;
  padding: 0 16px;
`;


export default NavLayout;