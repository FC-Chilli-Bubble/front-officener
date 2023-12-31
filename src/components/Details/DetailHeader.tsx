import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HeaderBg from '@/assets/food/img_details_bg.svg';
import IconBack from '@/assets/ico_back_w.svg';


const DetailHeader = () => {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate('/delivery');
  };

  return (
    <StyledHeader bgImage={HeaderBg}>
      <StyledLeftIcon onClick={handleIconClick}>
        <img
          src={IconBack}
          alt=""
        />
      </StyledLeftIcon>

      <h3>함께 배달시 유의사항</h3>
      <StyledP>-&gt; 이체시간을 엄수해주세요!</StyledP>
      <StyledP>-&gt; 호스트님께 감사인사를 꼭 해주세요</StyledP>
      <StyledP>-&gt; 빠른 응답 부탁드립니다!</StyledP>
    </StyledHeader>
  );
};

const StyledHeader = styled.div<{ bgImage: string; }>`
  height: 254px;
  background-image: none;
  width: 100%;
  padding: 90px 0 112px 25px;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-repeat: no-repeat;
  background-position: right bottom;
  position:relative;
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

const StyledLeftIcon = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  left: 15px;
  top: 15px;
`;

const StyledP = styled.p`
  color: ${props => props.theme.colors.primaryPressedColor};
  font-size: 12px;
`;

export default DetailHeader;
