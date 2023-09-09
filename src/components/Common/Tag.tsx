import { styled } from 'styled-components';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { tagState } from '@/states/tagAtom';

type TagWidth = 'fixed' | 'nonfixed';
type TagType = 'cta' | 'primary';

type TTagProps = {
  width?: TagWidth;
  title: string;
  type?: TagType | undefined; // 타입 명시
  onClick: () => void;
};

const Tag = ({ width = 'fixed', title, onClick }: TTagProps) => {
  const [isActive, setIsActive] = useState(false);
  const [type, setType] = useRecoilState<{ [key: string]: TagType }>(tagState);

  const toggleTag = () => {
    setIsActive(!isActive);
    setType(prevType => ({
      ...prevType,
      [title]: prevType[title] === 'cta' ? 'primary' : 'cta' // 태그별로 상태 업데이트
    }));
    if (onClick) {
      onClick();
    }
  };

  const dynamicWidth = width === 'nonfixed' ? `${Math.max(title.length * 20, 97)}px` : '97px';

  return (
    <StyledTag
      width={width}
      type={type[title] || 'primary'}
      title={title}
      onClick={toggleTag}
      style={{ width: dynamicWidth }}>
      {title}
    </StyledTag>
  );
};

const StyledTag = styled.button<TTagProps>`
  outline: none;
  border: 1.2px solid
    ${({ theme, type }) => (type === 'cta' ? theme.colors.ctaColor : theme.colors.ctaColor)};
  border-radius: 8px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: ${({ type, theme }) => (type === 'cta' ? theme.colors.white : theme.colors.ctaColor)};
  background-color: ${({ type, theme }) =>
    type === 'cta' ? theme.colors.ctaColor : theme.colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${({ type, theme }) =>
      type === 'cta' ? theme.colors.ctaHoverColor : theme.colors.primaryColor};
  }
`;

export default Tag;
