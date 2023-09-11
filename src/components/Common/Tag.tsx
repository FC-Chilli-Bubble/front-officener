import { styled } from 'styled-components';

type TagWidth = 'fixed' | 'nonfixed';

type TTagProps = {
  width?: TagWidth; //태그 가로너비 반응형 유무 선택
  isActive: boolean; //선택된 태그 여부 판단
  title: string; //타이틀
  onClick: () => void;
};

const Tag = ({ width = 'fixed', isActive = false, title, onClick }: TTagProps) => {
  const dynamicWidth = width === 'nonfixed' ? `${Math.max(title.length * 20, 97)}px` : '97px';

  return (
    <StyledTag
      isActive={isActive}
      width={width}
      title={title}
      onClick={onClick}
      style={{ width: dynamicWidth }}>
      {title}
    </StyledTag>
  );
};

const StyledTag = styled.button<TTagProps>`
  outline: none;
  border: 1.2px solid
    ${({ isActive, theme }) => (isActive ? theme.colors.ctaColor : theme.colors.ctaColor)};
  border-radius: 8px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.white : theme.colors.ctaColor)};
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.ctaColor : theme.colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${({ isActive, theme }) =>
      isActive ? theme.colors.ctaHoverColor : theme.colors.primaryColor};
  }
`;

export default Tag;
