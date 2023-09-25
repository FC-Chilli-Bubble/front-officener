import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import {
  chatDeclarationDataAtom,
  declarationStepAtom,
  isDeclarationBottomsheetOpenAtom
} from '@/states/chatDeclarationAtom';
import { DECLARATION_DATA } from '@/constants/declarationCategory';

const ChatDeclarationStepCategory = () => {
  const setIsBottomsheetOpen = useSetRecoilState(isDeclarationBottomsheetOpenAtom);
  const setDeclarationStep = useSetRecoilState(declarationStepAtom);
  const [ChatDeclarationData, setchatDeclarationData] = useRecoilState(chatDeclarationDataAtom);

  const handleCloseBottomSheet = () => {
    setIsBottomsheetOpen(false);
    setDeclarationStep(1);
  };

  const handleCategoryClick = (data: string) => {
    setchatDeclarationData({ ...ChatDeclarationData, category: `${data}` });
    setDeclarationStep(2);
  };

  return (
    <StyledSheetContainer>
      <StyledSheetBoxTitle>
        유형
        <StyledCancelButton onClick={handleCloseBottomSheet}>취소</StyledCancelButton>
      </StyledSheetBoxTitle>
      {DECLARATION_DATA.map(data => {
        return (
          <StyledCategory
            key={data}
            onClick={() => handleCategoryClick(data)}>
            {data}
          </StyledCategory>
        );
      })}
    </StyledSheetContainer>
  );
};
const StyledSheetContainer = styled.div`
  position: relative;
  padding: 0 20px 11px 20px;
`;
const StyledSheetBoxTitle = styled.div`
  color: ${({ theme }) => theme.colors.grayColor11};
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
`;
const StyledCancelButton = styled.div`
  cursor: pointer;
`;
const StyledCategory = styled.div`
  padding: 12px 0;
  cursor: pointer;
`;

export default ChatDeclarationStepCategory;
