import { styled } from 'styled-components';

const BottomNavigation = () => {
  return (
    <StyledNav>

    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%; 
  height: 90px; 
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 0.3px solid ${({ theme }) => theme.colors.barBorderColor};
  ul {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default BottomNavigation;