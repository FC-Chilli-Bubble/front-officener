import { styled } from 'styled-components';

import gray_arrow from '@/assets/ico_gray_arrow.svg';

interface ICheckListProps {
  label: string;
  checked: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (isChecked: boolean) => void;
  isRequired: boolean;
}

const CheckList = ({ label, checked, onChange }: ICheckListProps) => {
  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <>
      <StyledLabel htmlFor={label}>
        <input
          type="checkbox"
          id={label}
          name={label}
          checked={checked}
          onChange={handleCheckChange}
        />
        <span></span>
        {label}
        <img
          src={gray_arrow}
          alt="자세히보기 화살표"
        />
      </StyledLabel>
    </>
  );
};

const StyledLabel = styled.label`
  margin-top: 18px;
  font-size: 16px;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.grayColor4};
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* background-color: green; */
  input {
    display: none;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;

    border-radius: 2px;
    border: 2px solid ${({ theme }) => theme.colors.grayColor4};
    background: transparent;
  }
  img {
    margin-right: 10px;
  }
  input:checked + span {
    background-color: ${({ theme }) => theme.colors.ctaColor};
    border: none;
    &::after {
      content: '';
      position: absolute;
      top: 3px;
      left: 6px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-radius: 2px;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`;

export default CheckList;
