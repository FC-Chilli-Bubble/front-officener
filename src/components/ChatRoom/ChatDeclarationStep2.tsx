import { useRecoilState, useSetRecoilState } from 'recoil';
import { chatDeclarationDataAtom, declarationStepAtom } from '@/states/chatDeclarationAtom';
import { useState } from 'react';
import styled from 'styled-components';

const ChatDeclarationStep1 = () => {
  const setDeclarationStep = useSetRecoilState(declarationStepAtom);
  const [ChatDeclarationData, setchatDeclarationData] = useRecoilState(chatDeclarationDataAtom);
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleOnChange = e => {
    setTextAreaValue(e.target.value);
  };

  const handleBackClick = () => {
    setDeclarationStep(1);
  };

  const handleDeclarationClick = () => {
    setchatDeclarationData({ ...ChatDeclarationData, detail: `${textAreaValue}` });
    setDeclarationStep(3);
  };

  return (
    <StyledSheetContainer>
      <StyledSheetBoxTitle>채팅메시지 신고</StyledSheetBoxTitle>
      <StyledInputWrep>
        <StyledText>더 자세히 알려주세요</StyledText>
        <StyledTextarea onChange={handleOnChange} />
        <StyledTextCount>0/2000</StyledTextCount>
      </StyledInputWrep>
      <StyledButtonWrep>
        <StyledButton onClick={handleBackClick}>뒤로</StyledButton>
        <StyledButton onClick={handleDeclarationClick}>신고하기</StyledButton>
      </StyledButtonWrep>
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
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;
const StyledInputWrep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledText = styled.div`
  font-size: 12px;
`;
const StyledTextarea = styled.textarea`
  font-family: Pretendard;
  width: 100%;
  height: 74px;
  border: 1px solid ${({ theme }) => theme.colors.grayColor6};
  border-radius: 8px;
  padding: 9px 16px;
  overflow-wrap: break-word;
  word-break: break-word;
  resize: none;
  &:focus {
    outline: none;
  }
`;
const StyledTextCount = styled.div`
  width: 100%;
  text-align: right;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.grayColor11};
`;
const StyledButtonWrep = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledButton = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grayColor11};
  cursor: pointer;
`;

export default ChatDeclarationStep1;
