import React from 'react'
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Intro() {
  const navigate = useNavigate();
    const handleNavigate = () => {
      navigate('/intro/register');
      return;
    };

  return (
    <>
      <div>
        편리한 오피스 생활의 시작 오피스너 지금까지 경험하지 못한 스마트 오피스 생활을 경험해보세요!
      </div>
      <StyledSignupContainer>
        오피스너 계정이 없으신가요?
        <StyledSignupBox onClick={handleNavigate}>회원가입</StyledSignupBox>
      </StyledSignupContainer>
    </>
  );
}
const StyledSignupContainer = styled.p`
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayColor6};
`;
const StyledSignupBox = styled.a`
  color: ${({ theme }) => theme.colors.ctaColor};
  padding-left: 5px;
  cursor: pointer;
`;

export default Intro
