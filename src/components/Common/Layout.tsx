import { styled } from 'styled-components';

type TLayoutProps = {
  children: JSX.Element
}

const Layout = ({ children }: TLayoutProps) => {
  return (
    <StyledLayout>
      <StyledContainer>
        {children}
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
`;

export default Layout;