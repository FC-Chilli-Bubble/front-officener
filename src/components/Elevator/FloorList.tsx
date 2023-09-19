import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import Tag from '@/components/Common/Tag';
import { Floor_TAG } from '@/constants/commonUiData';
import { floorAtom } from '@/states/floorAtom';

type TFloorListProps = {
  closeSheet: () => void;
};

const FloorList = React.memo(({ closeSheet }: TFloorListProps) => {
  // 1. api 호출
  // 2. 응답 -> [1, 2, 3, 4]
  // 3. setSavedTags([1,2,3,4])
  // 4.
  const [savedTags, setSavedTags] = useRecoilState(floorAtom);
  const [selectedTags, setSelectedTags] = useState<string[]>(savedTags);

  const handleClickTag = (tag: string) => {
    // 이미 선택되어 있는 경우 선택 해제
    console.log('selectedTags : ', selectedTags);
    if (selectedTags.includes(tag)) {
      const newTags = selectedTags.filter(t => t !== tag);
      console.log('newTags : ', newTags);
      setSelectedTags(newTags);
      return;
    }
    // 선택 처리
    setSelectedTags([...selectedTags, tag]);
    console.log('selectedTags2 : ', [...selectedTags, tag]);
  };

  const handleSaveTag = () => {
    setSavedTags(selectedTags);
    closeSheet();
  };

  return (
    <StyledContainer>
      <StyledConfirm
        onClick={handleSaveTag}
        disabled={selectedTags.length === 0}>
        확인
      </StyledConfirm>
      <div>
        <h2>엘리베이터를 선택해주세요</h2>
        <p>{'오산테라타워'}</p>
      </div>
      <ul>
        {Floor_TAG.map(tag => (
          <li key={tag}>
            <Tag
              width="fixed"
              title={tag}
              isActive={selectedTags.includes(tag)}
              onClick={() => {
                handleClickTag(tag);
              }}
            />
          </li>
        ))}
      </ul>
    </StyledContainer>
  );
});

const StyledContainer = styled.div`
  padding: 0px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #1a1a1a;

  h2 {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 500;
  }

  p {
    font-size: 14px;
    font-weight: 700;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    justify-items: center;
    row-gap: 16px;
    column-gap: 20px;
  }
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

export default FloorList;
