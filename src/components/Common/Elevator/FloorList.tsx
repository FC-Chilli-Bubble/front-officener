import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import Tag from '@/components/Common/Tag';
import { Floor_TAG } from '@/constants/commonUiData';
import { postTagAtom } from '@/states/postTagAtom';
import { postAtom } from '@/states/postAtom';

type TFloorListProps = {
  closeSheet: () => void;
};

const FloorList = React.memo(({ closeSheet }: TFloorListProps) => {
  const [postData, setPostData] = useRecoilState(postAtom);
  const [savedTag, setSavedTag] = useRecoilState(postTagAtom);
  const [selectedTag, setSelectedTag] = useState<string>(savedTag);

  const handleClickTag = (tag: string) => {
    setSelectedTag(tag);
  };

  const handleSaveTag = () => {
    setPostData({ ...postData, tag: selectedTag ?? '' });
    setSavedTag(selectedTag);
    closeSheet();
  };

  return (
    <StyledContainer>
      <StyledConfirm
        onClick={handleSaveTag}
        disabled={selectedTag === ''}>
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
              isActive={selectedTag === tag}
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
