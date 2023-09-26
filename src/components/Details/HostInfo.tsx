import React from 'react';
import styled from 'styled-components';

import IconProfile from '@/assets/img_profile.svg';
import { BANKS } from '@/constants/banks';

type THostInfoProps = {
  userName: string,
  bank: string,
  account: string,
  desc: string;
};

const HostInfo = React.memo(({ userName, bank, account, desc }: THostInfoProps) => {
  return (
    <StyledHostInfo>
      <h4>호스트 (주문자)</h4> <br />
      <HostDetailContainer>
        <img
          src={IconProfile}
          alt="Food Photo"
        />
        <h3>{userName}</h3>
        <h1>{Object.keys(BANKS).find(key => BANKS[key] === bank)} {account}</h1>
      </HostDetailContainer>
      <br />
      <h2>추가설명</h2>
      <br />
      <span>
        {desc}
      </span>
    </StyledHostInfo>
  );
});

const StyledHostInfo = styled.div`
  padding: 24px 20px;
  align-self: flex-start;
  position: relative;
  margin-bottom: 100px;

  h4 {
    color: ${props => props.theme.colors.grayColor10};
    font-size: 16px;
    font-weight: 600;
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
    padding-left: 10px;
  }

  h2 {
    color: ${props => props.theme.colors.grayColor10};
    font-size: 16px;
    font-weight: 600;
  }

  h1 {
    font-size: 14px;
    font-weight: 700;
    padding-left: 40px;
  }

  span {
    color: black;
    font-size: 14px;
  }
`;

const HostDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 10px 0;

  img {
    width: 30px;
    height: 30px;
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.10));
  }
`;
export default HostInfo;
