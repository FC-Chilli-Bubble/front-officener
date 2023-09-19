import { useRecoilState, useRecoilValue } from 'recoil';
import {
  declarationStepAtom,
  isDeclarationBottomsheetOpenAtom
} from '@/states/chatDeclarationAtom';
import BottomSheetModal from '@/components/Common/BottomSheetModal';
import ChatDeclarationStep1 from '@/components/ChatRoom/ChatDeclarationStep1';
import ChatDeclarationStep2 from '@/components/ChatRoom/ChatDeclarationStep2';
import ChatDeclarationStep3 from '@/components/ChatRoom/ChatDeclarationStep3';

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
        return <ChatDeclarationStep1 />;
      case 2:
        return <ChatDeclarationStep2 />;
      case 3:
        return <ChatDeclarationStep3 />;
      default:
        return <ChatDeclarationStep1 />;
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
