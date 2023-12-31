import React, { useMemo } from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import IconDown from '@/assets/ico_chevron_down.svg';
import { postAtom, postBankAtom } from "@/states/postAtom";
import { timePickerAtom } from '@/states/timePickerAtom';
import { BANKS, BANKS_MAX_NUM } from '@/constants/banks';

type TPostStepDeliveryInfoProps = {
  openBottomSheet: (_e: React.MouseEvent<HTMLButtonElement>) => void;
  attendees?: number;
};


const PostStepDeliveryInfo = ({ openBottomSheet, attendees = 1 }: TPostStepDeliveryInfoProps) => {
  const [postData, setPostData] = useRecoilState(postAtom);
  const [savedTime] = useRecoilState(timePickerAtom);
  const bankList = useRecoilValue(postBankAtom);

  const timeStr = useMemo(() => {
    if (savedTime.houres === '' || savedTime.time === '' || savedTime.minutes === '') {
      return '';
    }
    return `${savedTime.time} ${savedTime.houres} : ${savedTime.minutes}`;
  }, [savedTime]);

  // 은행 선택
  const handleChangeBank = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // 계좌번호 초기화 추가
    setPostData({ ...postData, bankName: e.target.value, accountNumber: '' });
  };

  return (
    <>
      {/* 은행 */}
      <div>
        <StyledLabel htmlFor="bank"> 이체 정보입력<span>*</span></StyledLabel>
        <StyledDropdown>
          <select required id='bank' value={postData.bankName} onChange={handleChangeBank}>
            <option value="" disabled selected>은행/증권사</option>
            {
              bankList.map(bank => <option value={bank.name}>{BANKS[bank.name]}</option>)
            }
          </select>
          <img src={IconDown} />
        </StyledDropdown>
        <StyledInput placeholder='계좌번호' type='text' value={postData.accountNumber}
          maxLength={BANKS_MAX_NUM[postData.bankName]} onChange={(e) => { setPostData({ ...postData, accountNumber: e.target.value.replace(/[^0-9]/g, '') }); }} />
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
          <select required id='maxNum' value={(postData.maxAttendees ?? '').toString()} onChange={(e) => { setPostData({ ...postData, maxAttendees: Number(e.target.value) }); }}>
            <option value="" disabled selected>인원선택</option>
            <option value="2" disabled={attendees > 2}>2</option>
            <option value="3" disabled={attendees > 3}>3</option>
            <option value="4" disabled={attendees > 4}>4</option>
            <option value="5" disabled={attendees > 5}>5</option>
            <option value="6" disabled={attendees > 6}>6</option>
            <option value="7" disabled={attendees > 7}>7</option>
            <option value="8" disabled={attendees > 8}>8</option>
            <option value="9" disabled={attendees > 9}>9</option>
            <option value="10" disabled={attendees > 10}>10</option>
          </select>
          <img src={IconDown} />
        </StyledDropdown>
      </StyledBox>

      {/* 추가 설명 */}
      <div>
        <StyledLabel htmlFor='desc'>추가 설명</StyledLabel>
        <StyledTextArea id='desc' placeholder='배달비 걱정 없이 함께 배달 시켜요!' value={postData.desc} onChange={(e) => { setPostData({ ...postData, desc: e.target.value }); }} />
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
    background-color: ${({ theme }) => theme.colors.white};

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

export default PostStepDeliveryInfo;