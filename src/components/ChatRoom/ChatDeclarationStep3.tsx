import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';

import {
  declarationStepAtom,
  isDeclarationBottomsheetOpenAtom
} from '@/states/chatDeclarationAtom';

const ChatDeclarationStep1 = () => {
  const setIsBottomsheetOpen = useSetRecoilState(isDeclarationBottomsheetOpenAtom);
  const setDeclarationStep = useSetRecoilState(declarationStepAtom);

  const handleCloseBottomSheet = () => {
    setIsBottomsheetOpen(false);
    setDeclarationStep(1);
  };

  return (
    <StyledSheetContainer>
      <StyledSheetBoxTitle>신고해 주셔서 감사합니다.</StyledSheetBoxTitle>
      <StyledText>오피스너가 이를 검토하고 조치를 취할 것입니다.</StyledText>
      <StyledButton onClick={handleCloseBottomSheet}>닫기</StyledButton>
    </StyledSheetContainer>
  );
};

const StyledSheetContainer = styled.div`
  padding: 20px 20px 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledSheetBoxTitle = styled.div`
  color: ${({ theme }) => theme.colors.grayColor11};
  text-align: center;
  font-size: 16px;
`;
const StyledText = styled.div`
  color: ${({ theme }) => theme.colors.grayColor11};
  font-size: 12px;
  text-align: center;
`;
const StyledButton = styled.div`
  text-align: right;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grayColor11};
  padding-right: 16px;
  cursor: pointer;
`;

export default ChatDeclarationStep1;
