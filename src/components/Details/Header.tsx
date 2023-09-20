import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => (
  <StyledHeader>
    <h3>함께 배달시 유의사항</h3>
    <StyledP>- 이체시간을 엄수해주세요!</StyledP>
    <StyledP>- 호스트님께 감사인사를 꼭 해주세요</StyledP>
    <StyledP>- 빠른 응답 부탁드립니다!</StyledP>
  </StyledHeader>
);

const StyledHeader = styled.div`
  background-image: none;
  width: 100%;
  padding: 90px 0 112px 25px;
  background-image: url('src/assets/food/IMG1234.svg');
  background-repeat: no-repeat;
  background-position: right bottom;

  background-color: ${props => props.theme.colors.marinblueColor};
  h3 {
    color: ${props => props.theme.colors.white};
    font-size: 25px;
    font-weight: 500;
  }

  p {
    color: ${props => props.theme.colors.primaryPressedColor};
    font-size: 13px;
    padding: 10px 0 0 0;
  }
`;

const StyledP = styled.p`
  color: ${props => props.theme.colors.primaryPressedColor};
  font-size: 12px;
`;

export default Header;
