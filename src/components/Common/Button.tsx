import { styled } from 'styled-components';

type ButtonType = 'cta' | 'primary';
type ButtonSize = 'small' | 'normal';

type TButtonProps = {
  size?: ButtonSize;
  type?: ButtonType;
  title: string;
  width?: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button = ({
  size = 'normal',
  type = 'cta',
  title,
  width = '100%',
  disabled = false,
  onClick
}: TButtonProps) => {
  return (
    <StyledButton
      size={size}
      type={type}
      title={title}
      width={width}
      disabled={disabled}
      onClick={onClick}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button<TButtonProps>`
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
  font-size: ${({ size }) => (size === 'normal' ? '20px' : '16px')};
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

  &:disabled {
    color: ${({ type, theme }) =>
    type === 'cta' ? theme.colors.white : theme.colors.ctaDisabledColor};
    background-color: ${({ type, theme }) =>
    type === 'cta' ? theme.colors.ctaDisabledColor : theme.colors.primaryPressedColor};
  }
`;

export default Button;
