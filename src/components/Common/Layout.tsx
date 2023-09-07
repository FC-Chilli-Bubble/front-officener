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

const StyledLayout = styled.section`
  height: inherit;
  position: relative ;
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
  flex: 1 1 0%;
  padding: 0 16px;
`;


export default Layout;