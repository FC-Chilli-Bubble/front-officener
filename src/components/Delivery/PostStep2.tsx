import React, { useMemo } from 'react';
import { useRecoilState } from "recoil";
import styled from "styled-components";


import IconDown from '@/assets/ico_chevron_down.svg';
import { postAtom } from "@/states/postAtom";
import { timePickerAtom } from '@/states/timePickerAtom';

type TPostStep2Props = {
  // eslint-disable-next-line no-unused-vars
  openBottomSheet: (e: React.MouseEvent<HTMLButtonElement>) => void;
};


const PostStep2 = ({ openBottomSheet }: TPostStep2Props) => {
  const [postData, setPostData] = useRecoilState(postAtom);
  const [savedTime] = useRecoilState(timePickerAtom);

  const timeStr = useMemo(() => {
    if (savedTime.houres === '' || savedTime.time === '' || savedTime.minutes === '') {
      return '';
    }
    return `${savedTime.time} ${savedTime.houres} : ${savedTime.minutes}`;
  }, [savedTime]);

  return (
    <>
      {/* 은행 */}
      <div>
        <StyledLabel htmlFor="bank"> 이체 정보입력<span>*</span></StyledLabel>
        <StyledDropdown>
          <select required id='bank' value={postData.bank} onChange={(e) => { setPostData({ ...postData, bank: e.target.value }); }}>
            <option value="" disabled selected>은행/증권사</option>
            <option value="우리">우리은행</option>
            <option value="신한">신한은행</option>
            <option value="농협">농협은행</option>
            <option value="기업">기업은행</option>
          </select>
          <img src={IconDown} />
        </StyledDropdown>
        <StyledInput placeholder='계좌번호' type='number' value={postData.account} onChange={(e) => { setPostData({ ...postData, account: e.target.value }); }} />
      </div>

      {/* 이체 마감시간 */}
      <StyledBox>
        <StyledLabel htmlFor='time'>이체 마감시간<span>*</span></StyledLabel>
        <StyledPickerButton id='time' onClick={openBottomSheet} isEmpty={timeStr === ''}>
          {timeStr ? timeStr : '시간 선택'}
        </StyledPickerButton>
      </StyledBox>

      {/* 참여인원 */}
      <StyledBox>
        <StyledLabel htmlFor='maxNum'>최대 참여인원<span>*</span></StyledLabel>
        <StyledDropdown>
          <select required id='maxNum' value={(postData.maximumNum ?? '').toString()} onChange={(e) => { setPostData({ ...postData, maximumNum: Number(e.target.value) }); }}>
            <option value="" disabled selected>인원선택</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <img src={IconDown} />
        </StyledDropdown>
      </StyledBox>

      {/* 추가 설명 */}
      <div>
        <StyledLabel htmlFor='desc'>추가 설명</StyledLabel>
        <StyledTextArea id='desc' placeholder='배달비 걱정 없이 함께 배달 시켜요!' value={postData.decription} onChange={(e) => { setPostData({ ...postData, decription: e.target.value }); }} />
      </div>
    </>
  );
};

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.grayColor5};
  line-height: normal;
  font-size: 16px;

  span {
  color: ${({ theme }) => theme.colors.redColor0};
  margin-left: 5px;
  }
`;

const StyledDropdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  select {
    font-size: 16px;
    margin-top: 8px;
    display: flex;
    width: 100%;
    height: 48px;
    padding: 13px 60px 13px 24px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.grayColor3};
    outline: none;
    color: ${({ theme }) => theme.colors.black};

    &:focus {
      color: ${({ theme }) => theme.colors.black};
      border: 1px solid ${({ theme }) => theme.colors.marinblueColor};
    }

    -webkit-appearance: none;
    -moz-appearance: none;

    &::-ms-expand {
      display: none;
    }
  }

  select:required:invalid {
    color: ${({ theme }) => theme.colors.grayColor4} !important;
  }

  option[value=""][disabled] {
	  display: none;
  }

  img {
    position: absolute;
    top: 20px;
    right: 30px;
  }
`;

const StyledInput = styled.input`
  height: 48px;
`;

const StyledBox = styled.div`
  width: 60%;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 248px;
  resize: none;
  margin-bottom: 100px;
`;

const StyledPickerButton = styled.button<{ isEmpty: boolean; }>`
  outline: none;
  font-size: 16px;
  margin-top: 8px;
  display: flex;
  width: 100%;
  height: 48px;
  padding: 13px 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grayColor3};
  color: ${({ isEmpty, theme }) => isEmpty ? theme.colors.grayColor4 : theme.colors.black};
  
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.marinblueColor};
  }
`;

export default PostStep2;