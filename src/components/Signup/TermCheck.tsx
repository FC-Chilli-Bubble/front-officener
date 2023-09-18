import { useState } from 'react';
import { styled } from 'styled-components';

import CheckList from '@/components/Signup/CheckList';

const TermCheck = ({ onChildCheckChange }) => {
  const [allChecked, setAllChecked] = useState(false);
  const [childChecked, setChildChecked] = useState([false, false, false]);

  // 전체 동의 체크박스 변경 호출
  const handleAllCheckChange = () => {
    setAllChecked(!allChecked);
    setChildChecked([!allChecked, !allChecked, !allChecked]);
  };
  // 세부 체크박스가 변경 호출
  const handleChildCheckChange = (index: number, isChecked: boolean) => {
    const newChildChecked = [...childChecked];
    newChildChecked[index] = isChecked;
    setChildChecked(newChildChecked);

    if (newChildChecked.every(checked => checked)) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  };

  return (
    <>
      <StyledLayout00>
        <StyledContainer00>
          <StyledLabel00 htmlFor="check">
            <input
              type="checkbox"
              id="check"
              name="check"
              checked={allChecked}
              onChange={handleAllCheckChange}
            />
            <span></span>
            전체 동의
          </StyledLabel00>
        </StyledContainer00>
        <CheckList
          label="서비스 이용약관 (필수)"
          checked={childChecked[0]}
          onChange={isChecked => handleChildCheckChange(0, isChecked)}
          isRequired={true}
        />
        <CheckList
          label="개인정보 처리방침 (필수)"
          checked={childChecked[1]}
          onChange={isChecked => handleChildCheckChange(1, isChecked)}
          isRequired={true}
        />
        <CheckList
          label="마케팅 정보 수신 (선택)"
          checked={childChecked[2]}
          onChange={isChecked => handleChildCheckChange(2, isChecked)}
          isRequired={false}
        />
      </StyledLayout00>
    </>
  );
};

const StyledLayout00 = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
`;

const StyledContainer00 = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: #0000ff20; */
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayColor2};
`;

const StyledLabel00 = styled.label`
  display: block;
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

export default TermCheck;
