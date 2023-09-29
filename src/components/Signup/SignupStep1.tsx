import { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import Header from '@/components/Common/Header';
import CheckList from '@/components/Signup/CheckList';
import Button from '@/components/Common/Button';
import { agreementCheckboxAtom } from '@/states/signupRequestAtom';

interface SignupStepProps {
  // eslint-disable-next-line no-unused-vars
  onNextStep: (stepNum: number) => void;
}

const SignupStep1 = ({ onNextStep }: SignupStepProps) => {
  const [allChecked, setAllChecked] = useState(false);
  const [childChecked, setChildChecked] = useState([false, false, false]);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const [, setAgreementPassed] = useRecoilState(agreementCheckboxAtom);

  // 로그인 페이지 이동 버튼
  const handleServiceClick = () => {
    navigate('/intro');
    return;
  };

  // 페이지 이동 버튼 함수
  const handleNextStep = () => {
    setAgreementPassed({ agree: true });
    onNextStep(2);
  };

  // 전체 동의 체크박스 변경 호출
  const handleAllCheckChange = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    setChildChecked([newAllChecked, newAllChecked, newAllChecked]);
    const disabled = newAllChecked || !childChecked.slice(0, -1).every(isChecked => isChecked);
    setDisabled(disabled);
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

    const disabled = !newChildChecked.slice(0, -1).every(isChecked => isChecked);
    setDisabled(!disabled);
  };

  return (
    <>
      <Header
        title="가입약관"
        leftIcon="back"
        leftIconClick={handleServiceClick}
      />
      <StyledLayout>
        <StyledContainer>
          <StyledBox>
            반가워요!
            <br /> 오피스너입니다.
            <div>
              오피스너 서비스를 이용하기 위해서는 <br />
              약관 동의가 필요해요!
            </div>
          </StyledBox>
          <StyledTermContainer>
            <StyledTermBox>
              <StyledCheckAll htmlFor="check">
                <input
                  type="checkbox"
                  id="check"
                  name="check"
                  checked={allChecked}
                  onChange={handleAllCheckChange}
                />
                <span></span>
                전체 동의
              </StyledCheckAll>
            </StyledTermBox>
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
          </StyledTermContainer>
        </StyledContainer>
        <StyledButtonContainer>
          <Button
            size="normal"
            type="cta"
            title="다음"
            width="100%"
            disabled={!disabled}
            onClick={handleNextStep}
          />
        </StyledButtonContainer>
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.div`
  height: calc(100% - 56px);
  padding: 0 17px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledContainer = styled.div`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledBox = styled.div`
  padding: 0 11px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  color: ${({ theme }) => theme.colors.black};
  & > div {
    margin-top: 14px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
`;

const StyledTermContainer = styled.div`
  display: flex;
  height: 158px;
  flex-direction: column;
`;

const StyledTermBox = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayColor2};
`;

const StyledCheckAll = styled.label`
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

const StyledButtonContainer = styled.div`
  margin: 30px 0;
`;

export default SignupStep1;
