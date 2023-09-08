import { styled } from 'styled-components';

import { HEADER_LEFT_ICONS } from '@/constants/commonUiData';

type LeftIconType = 'back' | 'close' | 'none';

type THeaderProps = {
  leftIcon?: LeftIconType; // 왼쪽 버튼 타입
  leftIconClick?: () => void; // 왼쪽 버튼 클릭 콜백 함수
  title?: string; // 타이틀
};

const Header = ({ leftIcon = 'none', leftIconClick, title }: THeaderProps) => {
  return (
    <StyledHeader>
      <StyledLeftIcon onClick={leftIconClick}>
        {leftIcon !== 'none' && (
          <img
            src={HEADER_LEFT_ICONS[leftIcon]}
            alt=""
          />
        )}
      </StyledLeftIcon>
      <StyledTtile>{title}</StyledTtile>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 56px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 16px 18px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledLeftIcon = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const StyledTtile = styled.div`
  flex-grow: 1;
  text-align: center;
  margin-right: 24px;
`;

export default Header;
