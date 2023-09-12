import { useState } from 'react';
import Picker from 'react-mobile-picker';
import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';

import { HOURES, MINUTES, TIME } from '@/constants/pickerData';
import { timePickerAtom } from '@/states/timePickerAtom';

type TTimePickerProps = {
  closeSheet: () => void;
};

const TimePicker = ({ closeSheet }: TTimePickerProps) => {
  const [savedTime, setSavedTime] = useRecoilState(timePickerAtom);
  const [pickerValue, setPickerValue] = useState({
    time: savedTime.time || 'PM',
    houres: savedTime.houres || '12',
    minutes: savedTime.minutes || '00'
  });

  const handleClickSave = () => {
    closeSheet();
    setSavedTime(pickerValue);
  };

  return (
    <StyledContainer>
      <StyledConfirm onClick={handleClickSave}>확인</StyledConfirm>
      <StyledColumn
        value={pickerValue}
        onChange={({ time, houres, minutes }) => {
          setPickerValue(
            { time, houres, minutes }
          );
        }}
        wheelMode='natural'
        itemHeight={40}
        height={150}
      >
        <Picker.Column name="time" >
          {
            TIME.map(time => (<Picker.Item value={time} key={time}>
              {({ selected }) => (
                <StyledItem selected={selected}>
                  {time}
                </StyledItem>
              )}
            </Picker.Item>))
          }
        </Picker.Column>
        <Picker.Column name="houres" className='houres'>
          {
            HOURES.map(houre => (<Picker.Item value={houre} key={houre}>
              {({ selected }) => (
                <StyledItem selected={selected}>
                  {houre}
                </StyledItem>
              )
              }
            </Picker.Item>))
          }
        </Picker.Column>
        <Picker.Column name="minutes" className='minutes'>
          {
            MINUTES.map(minute => (<Picker.Item value={minute} key={minute}>
              {({ selected }) => (
                <StyledItem selected={selected}>
                  {minute}
                </StyledItem>
              )}
            </Picker.Item>))
          }
        </Picker.Column>
      </StyledColumn>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 0px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #1A1A1A;
`;

const StyledConfirm = styled.button`
  outline: none;
  border: none;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.ctaColor};
  align-self: flex-end;
  background: transparent;

  &:disabled {
    color: #636363;
  }
`;

const StyledColumn = styled(Picker)`
  z-index: 0;
  margin: 0 100px;
  gap: 30px;
  font-size: 16px;
  cursor: pointer;

  .minutes ~ div {
    opacity: 0;
  }
`;

const StyledItem = styled.div<{ selected: boolean; }>`
  color: ${({ selected, theme }) => selected ? theme.colors.black : theme.colors.grayColor3}
`;

export default TimePicker;