import { styled } from "styled-components";

const HomeHeader = () => {
  return (
    <StyledHeader>HomeHeader</StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.marinblueColor};
`;

export default HomeHeader;