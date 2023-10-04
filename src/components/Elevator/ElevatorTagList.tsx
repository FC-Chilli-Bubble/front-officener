import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';

import Tag from '@/components/Common/Tag';
import { elevatorAtom } from '@/states/elevatorAtom';
import { IObjectElevator } from '@/types/Elevator/IElevator';
import { updateSelectedElevators } from '@/apis/Elevator/elevatorRequests';
import { useModal } from '@/hooks/useModal';
import MODAL_DATAS from '@/constants/modalDatas';
import { userInfoAtom } from '@/states/userDataAtom';

type TElevatorTagListProps = {
  elevators: IObjectElevator[],
  closeSheet: (isUpdated: boolean) => void;
};

const ElevatorTagList = React.memo(({ elevators, closeSheet }: TElevatorTagListProps) => {
  const [savedTags, setSavedTags] = useRecoilState(elevatorAtom);
  const [selectedTags, setSelectedTags] = useState<number[]>(savedTags);
  const { openModal } = useModal();
  const user = useRecoilValue(userInfoAtom);

  const handleClickTag = (id: number) => {
    // 이미 선택되어 있는 경우 선택 해제
    if (selectedTags.includes(id)) {
      const newTags = selectedTags.filter(t => t !== id);
      setSelectedTags(newTags);
      return;
    }
    // 선택 처리
    setSelectedTags([...selectedTags, id]);
  };

  const updateElevators = async (selectedTags: number[]) => {
    try {
      const isUpdated = await updateSelectedElevators(selectedTags);
      if (isUpdated) {
        closeSheet(true);
      }
    } catch (error) {
      // 에러처리
      closeSheet(false);
    }
  };

  const handleSaveTag = () => {
    setSavedTags(selectedTags);
    updateElevators(selectedTags);
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
        <p>{user.userInfo.building.buildingName}</p>
      </div>
      <ul>
        {elevators.map(elevator => (
          <li key={elevator.id}>
            <Tag
              width="fixed"
              title={`${elevator.id}호기`}
              isActive={selectedTags.includes(elevator.id)}
              onClick={() => {
                handleClickTag(elevator.id);
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

export default ElevatorTagList;
