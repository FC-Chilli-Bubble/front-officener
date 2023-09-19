import { useState } from 'react';
import { styled } from 'styled-components';

import Header from '@/components/Common/Header';
import ico_building from '@/assets/ico_building.svg';
import ico_arrow from '@/assets/ico_arrow.svg';
import Button from '@/components/Common/Button';

interface SignupStepProps {
  // eslint-disable-next-line no-unused-vars
  onNextStep: (stepNum: number) => void;
}

const SignupStep4 = ({ onNextStep }: SignupStepProps) => {
  const [disabled, setDisabled] = useState(false); //임시로 false

  const handleServiceClick = () => {
    onNextStep(2);
    console.log('이전 페이지로');
    return;
  };

  // 버튼 클릭 처리 함수 (다음 단계로 이동 또는 다른 작업 수행)
  const handleNextStep = () => {
    onNextStep(5);
  };

  return (
    <>
      <Header
        title="가입 약관"
        leftIcon="back"
        leftIconClick={handleServiceClick}
      />
      <StyledLayout>
        <StyledContainer>
          미왕빌딩
          <br />
          입주자시군요!
          <div>입주 정보를 확인해 주세요.</div>
        </StyledContainer>
        <StyledCardContainer>
          <SytledCard>
            <StyledTitle>
              오피스너
              <br />
              입주카드
            </StyledTitle>
            <img
              src={ico_building}
              alt="빌딩Img"
            />
            <StyledBuilding>미왕빌딩</StyledBuilding>
            <StyledAddress>서울 강남구 강남대로</StyledAddress>
            <SytledOffice>
              A동 103(COIPSG)호
              <br />
              칠리버블
            </SytledOffice>
          </SytledCard>
          <StyledLink>
            나의 입주 정보와 다르다면
            <img
              src={ico_arrow}
              alt="화살표"
            />
          </StyledLink>
        </StyledCardContainer>
        <Button
          size={'normal'}
          type={'cta'}
          title={'네, 확인했어요!'}
          width={'100%'}
          disabled={disabled}
          onClick={handleNextStep}
        />
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  padding: 0 17px;
  padding-top: 23px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
`;

const StyledContainer = styled.div`
  height: 95px;
  padding: 0 11px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  /* background: greenyellow; */
  color: ${({ theme }) => theme.colors.ctaColor};
  & > div {
    color: ${({ theme }) => theme.colors.grayColor6};
    margin-top: 14px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
`;
const StyledCardContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* background-color: green; */
`;
const SytledCard = styled.div`
  height: 310px;
  width: 236px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grayColor6};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.dropShadow.depth1};
  border-radius: 20px;
  img {
    width: 66px;
  }
`;
const StyledTitle = styled.div`
  padding: 10px 0;
  line-height: 18px;
`;

const StyledBuilding = styled.div`
  padding: 10px 0;
  font-size: 16px;
`;
const StyledAddress = styled.div``;

const SytledOffice = styled.div`
  padding-top: 40px;
  line-height: 16px;
`;

const StyledLink = styled.a`
  padding: 10px;
  color: ${({ theme }) => theme.colors.ctaColor};
  cursor: pointer;
  img {
    padding-left: 15px;
  }
`;

export default SignupStep4;
