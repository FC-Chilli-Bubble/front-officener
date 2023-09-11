import { styled } from 'styled-components';

type ButtonSize = 'small' | 'normal';

type TOutlineButtonProps = {
  size?: ButtonSize;
  title: string;
  width?: string;
  disabled?: boolean;
  onClick: () => void;
};

const OutlineButton = ({
  size = 'normal',
  title,
  width = '100%',
  disabled = false,
  onClick
}: TOutlineButtonProps) => {
  return (
    <StyledButton
      size={size}
      title={title}
      width={width}
      disabled={disabled}
      onClick={onClick}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button<TOutlineButtonProps>`
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.ctaColor};
  border-radius: 8px;
  width: ${({ width }) => width};
  height: ${({ size }) => (size === 'normal' ? '60px' : '48px')};
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ size }) => (size === 'normal' ? '20px' : '16px')};
  color: ${({ theme }) => theme.colors.ctaColor};
  cursor: pointer;

  &:hover {
    background-color: #e7f2fe80;
  }

  &:active {
    background-color: #d4e3fbbf;
  }

  &:disabled {
    opacity: 0.4;
  }
`;

export default OutlineButton;
