import React from 'react';
import styled from 'styled-components';

import IconProfile from '@/assets/food/Vector.svg';

const HostInfo: React.FC = () => {
  return (
    <StyledHostInfo>
      <h4>호스트 (주문자)</h4> <br />
      <HostDetailContainer>
        <img
          src={IconProfile}
          alt="Food Photo"
        />
        <h3>빵먹다살찐떡</h3>
        <h1>우리은행 0000-0000-000</h1>
      </HostDetailContainer>
      <br />
      <h2>추가설명</h2>
      <br />
      <p>
        엽기떡볶이 마라맛 새로 나왔대요!! 배달 같이 시켜요! <br />
        엽기떡볶이 닭볶음탕도 진짜 맛있습니다!
      </p>
    </StyledHostInfo>
  );
};

const StyledHostInfo = styled.div`
  padding: 24px 16px;
  align-self: flex-start;
  position: relative;
  margin-bottom: 100px;

  h4 {
    color: ${props => props.theme.colors.grayColor10};
    font-size: 14px;
    font-weight: 500;
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
    padding-left: 10px;
  }

  h2 {
    color: ${props => props.theme.colors.grayColor10};
    font-size: 14px;
    font-weight: 500;
  }

  h1 {
    font-size: 14px;
    font-weight: 700;
    padding-left: 40px;
  }

  p {
    color: black;
    font-size: 12px;
  }
`;

const HostDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default HostInfo;
