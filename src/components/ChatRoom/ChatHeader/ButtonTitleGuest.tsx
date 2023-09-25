import styled from 'styled-components';

import IconWonWhite from '@/assets/chatrooms/ico_wonWhite.svg';
import checkWhite from '@/assets/chatrooms/ico_checkWhite.svg';

type TIsRemitted = {
  isRemitted: boolean;
};

const ButtonTitleGuest = ({ isRemitted }: TIsRemitted) => {
  const titleText = isRemitted ? '수령완료' : '송금완료';
  const titleIcon = isRemitted ? checkWhite : IconWonWhite;

  return (
    <>
      <StyledIcon>
        <img
          src={titleIcon}
          alt=""
        />
      </StyledIcon>
      {titleText}
    </>
  );
};

const StyledIcon = styled.div`
  width: 16px;
  height: 16px;
  padding-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ButtonTitleGuest;
