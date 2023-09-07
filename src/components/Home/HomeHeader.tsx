import { styled } from "styled-components";

const HomeHeader = () => {
  return (
    <StyledHeader>HomeHeader</StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.marinblueColor};
`;

export default HomeHeader;