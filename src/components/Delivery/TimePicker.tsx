import { useState } from 'react';
import Picker from 'react-mobile-picker';
import { styled } from 'styled-components';

import { HOURES, MINUTES, TIME } from '@/constants/pickerData';

const TimePicker = () => {
  const [pickerValue, setPickerValue] = useState({
    time: 'AM',
    houres: '01',
    minutes: '00'
  });

  return (
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
  );
};

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