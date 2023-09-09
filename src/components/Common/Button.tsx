import { styled } from "styled-components";

type ButtonType = "cta" | "primary";

type TButtonProps = {
  type?: ButtonType;
  title: string;
  width?: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button = ({ type = "cta", title, width = '100%', disabled = false, onClick }: TButtonProps) => {
  return (
    <StyledButton type={type} title={title} width={width} disabled={disabled} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button<TButtonProps>`
  outline: none;
  border: none;
  border-radius: 8px;
  width: ${({ width }) => width};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ type, theme }) => type === "cta" ? theme.colors.ctaColor : theme.colors.primaryColor};
  font-size: 20px;
  color: ${({ type, theme }) => type === "cta" ? theme.colors.white : theme.colors.ctaColor};
  cursor: pointer;

  &:hover {
    background-color: ${({ type, theme }) => type === "cta" ? theme.colors.ctaHoverColor : theme.colors.primaryHoverColor};
  }

  &:active {
    background-color: ${({ type, theme }) => type === "cta" ? theme.colors.ctaPressedColor : theme.colors.primaryPressedColor};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.ctaDisabledColor};
    background-color: ${({ type, theme }) => type === "cta" ? theme.colors.primaryDisabledColor : theme.colors.primaryPressedColor};
  }
`;

export default Button;