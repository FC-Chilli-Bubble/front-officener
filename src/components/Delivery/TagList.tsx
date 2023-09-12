import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from "recoil";

import Tag from '@/components/Common/Tag';
import { FOOD_TAG } from '@/constants/commonUiData';
import { postTagAtom } from "@/states/postTagAtom";

type TTagListProps = {
  closeSheet: () => void;
};

const TagList = React.memo(({ closeSheet }: TTagListProps) => {
  const [savedTag, setSavedTag] = useRecoilState(postTagAtom);
  const [selectedTag, setSelectedTag] = useState<string | null>(savedTag);

  const handleClickTag = (tag: string) => {
    setSelectedTag(tag);
  };

  const handleSaveTag = () => {
    setSavedTag(selectedTag);
    closeSheet();
  };

  return (
    <StyledContainer>
      <StyledConfirm onClick={handleSaveTag}>확인</StyledConfirm>
      <div>
        <h2>배달하는 가게의 태그를 선택해주세요</h2>
        <p>태그는 1개만 선택 가능합니다</p>
      </div>
      <ul>
        {
          FOOD_TAG.map(tag => (
            <li key={tag}>
              <Tag width='fixed' title={tag} isActive={selectedTag === tag} onClick={() => { handleClickTag(tag); }} />
            </li>
          ))
        }
      </ul>
    </StyledContainer>
  );
});

const StyledContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #1A1A1A;

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
  color: #636363;
  align-self: flex-end;
  background: transparent;
`;

export default TagList;