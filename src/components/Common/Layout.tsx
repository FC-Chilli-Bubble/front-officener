import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const Layout = () => {
  return (
    <StyledLayout>
      <StyledContainer>
        <StyledBox>
          <Outlet />
        </StyledBox>
      </StyledContainer>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  height: inherit;
  position: relative ;
  max-width: 560px; // 협의 필요
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledContainer = styled.div`
  height: 100%;
  position: relative;
`;

const StyledBox = styled.div`
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;


export default Layout;