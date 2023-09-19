import { styled } from "styled-components";

import IconBell from '@/assets/ico_bell_w.svg';
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <StyledHeader>
      <h1>오피스너</h1>
      <div>
        <Link to={'/notification'}>
          <img src={IconBell} alt="알림" />
        </Link>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.marinblueColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
  z-index: 1000;
  position: sticky;
  top: 0;

  h1 {
    font-size: 14px;
    color:  ${({ theme }) => theme.colors.white};
  }
`;

export default HomeHeader;