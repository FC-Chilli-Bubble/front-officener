import React from 'react';
import styled from 'styled-components';
import IconProfile from '@/assets/img_profile.svg';

interface IHostDetails {
  호스트: string;
  닉네임: string;
  은행계좌: string;
  추가설명: string;
}

interface IHostInfoProps {
  details: IHostDetails;
}

const HostInfo: React.FC<IHostInfoProps> = ({ details }) => {
  return (
    <StyledHostInfo>
      <h4>{details?.호스트}</h4> <br />
      <HostDetailContainer>
        <img
          src={IconProfile}
          alt="Profile Photo"
        />

        <h3>{details?.닉네임}</h3>
        <h1>{details?.은행계좌}</h1>
      </HostDetailContainer>
      <br />
      <h2>추가설명</h2>
      <br />
      <span>{details?.추가설명}</span>
    </StyledHostInfo>
  );
};

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
    padding: 3px 0 0 0;
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
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1));
  }
`;
export default HostInfo;
