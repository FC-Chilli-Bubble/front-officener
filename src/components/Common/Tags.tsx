import { styled } from 'styled-components';

type TagType = 'cta' | 'primary';
type TagSize = 'small' | 'normal';

type TtagProps = {
  size?: TagSize;
  type?: TagType;
  title: string;
  width?: string;
  unActive?: boolean;
  onClick: () => void;
};

const Tags = ({
  size = 'normal',
  type = 'cta',
  title,
  width = '100%',
  unActive = false,
  onClick
}: TtagProps) => {
  return (
    <StyledTag
      size={size}
      type={type}
      title={title}
      width={width}
      unActive={unActive}
      onClick={onClick}>
      {title}
    </StyledTag>
  );
};

const StyledTag = styled.button<TtagProps>`
  outline: none;
  border: none;
  border-radius: 8px;
  width: ${({ width }) => width};
  height: ${({ size }) => (size === 'normal' ? '60px' : '48px')};
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ type, theme }) =>
    type === 'cta' ? theme.colors.ctaColor : theme.colors.primaryColor};
  font-size: 20px;
  color: ${({ type, theme }) => (type === 'cta' ? theme.colors.white : theme.colors.ctaColor)};
  cursor: pointer;

  &:hover {
    background-color: ${({ type, theme }) =>
      type === 'cta' ? theme.colors.ctaHoverColor : theme.colors.primaryHoverColor};
  }

  &:active {
    background-color: ${({ type, theme }) =>
      type === 'cta' ? theme.colors.ctaPressedColor : theme.colors.primaryPressedColor};
  }

  &:active {
    color: ${({ type, theme }) =>
      type === 'cta' ? theme.colors.white : theme.colors.ctaDisabledColor};
    background-color: ${({ type, theme }) =>
      type === 'cta' ? theme.colors.ctaDisabledColor : theme.colors.primaryPressedColor};
  }
`;

export default Tags;
