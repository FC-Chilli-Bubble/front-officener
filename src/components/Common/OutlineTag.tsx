import { styled } from 'styled-components';

type TOutlineTagProps = {
  title: string;
  onClick: () => void;
};

const OutlineTag = ({ title, onClick }: TOutlineTagProps) => {
  return (
    <StyledBox>
      <Label htmlFor="input-box">
        태그
        <Required>*</Required>
      </Label>
      <StyledTag
        title={title}
        onClick={onClick}>
        {title}
      </StyledTag>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
`;
const Label = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayColor5};
`;

const Required = styled.span`
  color: ${({ theme }) => theme.colors.redColor0};
  margin-left: 5px;
`;

const StyledTag = styled.button<TOutlineTagProps>`
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.ctaColor};
  border-radius: 8px;
  width: 100px;
  height: 48px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.ctaColor};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export default OutlineTag;
