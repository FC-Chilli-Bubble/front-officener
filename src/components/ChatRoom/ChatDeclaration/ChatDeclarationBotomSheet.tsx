import { useRecoilState, useRecoilValue } from 'recoil';
import {
  declarationStepAtom,
  isDeclarationBottomsheetOpenAtom
} from '@/states/chatDeclarationAtom';
import BottomSheetModal from '@/components/Common/BottomSheetModal';
import ChatDeclarationStepCategory from '@/components/ChatRoom/ChatDeclaration/ChatDeclarationStepCategory';
import ChatDeclarationStepDetail from '@/components/ChatRoom/ChatDeclaration/ChatDeclarationStepDetail';
import ChatDeclarationStepFinal from '@/components/ChatRoom/ChatDeclaration/ChatDeclarationStepFinal';

const ChatDeclarationBotomSheet = () => {
  const [isBottomsheetOpen, setIsBottomsheetOpen] = useRecoilState(
    isDeclarationBottomsheetOpenAtom
  );
  const declarationStep = useRecoilValue(declarationStepAtom);

  const closeBottomSheet = () => {
    setIsBottomsheetOpen(false);
  };

  //단계별로 컴포넌트 실행
  const renderBottomSheet = () => {
    switch (declarationStep) {
      case 1:
        return <ChatDeclarationStepCategory />;
      case 2:
        return <ChatDeclarationStepDetail />;
      case 3:
        return <ChatDeclarationStepFinal />;
      default:
        return <ChatDeclarationStepCategory />;
    }
  };

  return (
    <BottomSheetModal
      isOpen={isBottomsheetOpen}
      onClose={closeBottomSheet}>
      {renderBottomSheet()}
    </BottomSheetModal>
  );
};

export default ChatDeclarationBotomSheet;
