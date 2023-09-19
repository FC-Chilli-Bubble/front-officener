import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  chatDeclarationDataAtom,
  declarationStepAtom,
  isDeclarationBottomsheetOpenAtom
} from '@/states/chatDeclarationAtom';

const ChatDeclarationStep1 = () => {
  const setIsBottomsheetOpen = useSetRecoilState(isDeclarationBottomsheetOpenAtom);
  const setDeclarationStep = useSetRecoilState(declarationStepAtom);
  const [ChatDeclarationData, setchatDeclarationData] = useRecoilState(chatDeclarationDataAtom);

  const DECLARATION_DATA = [
    '홍보/상업성',
    '같은 내용 도배',
    '욕설/인신공격',
    '음란/선정성',
    '불법정보',
    '개인정보 노출',
    '권리침해 신고',
    '관련 없는 내용',
    '기타'
  ];

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
        return <StyledCategory onClick={() => handleCategoryClick(data)}>{data}</StyledCategory>;
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

export default ChatDeclarationStep1;
