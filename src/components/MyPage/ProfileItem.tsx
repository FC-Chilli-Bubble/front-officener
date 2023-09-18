import React from 'react';
import styled from 'styled-components';

type TProfileItemProps = {
  title: string,
  content: string;
};
const ProfileItem = React.memo(({ title, content }: TProfileItemProps) => {
  return (
    <StyledBox>
      <span>{title}</span>
      <p>{content}</p>
    </StyledBox>
  );
});

const StyledBox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.grayColor5};
  }

  p {
    font-size: 14px;
    color:${({ theme }) => theme.colors.grayColor90}; 
  }
`;

export default ProfileItem;