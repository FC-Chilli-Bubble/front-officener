export type TModal = {
  isOpen?: boolean; // 모달 보여짐 여부
  title?: string; // 모달 타이틀
  content?: JSX.Element | string; // 모달 컨텐츠
  positive: string; // 왼쪽 버튼 텍스트
  positiveCallback?: () => void; // 왼쪽 버튼 클릭 시 콜백 함수
  negative?: string; // 오른쪽 버튼이 있는 경우만 작성
  negativeCallback?: () => void; // 오른쪽 버튼 클릭 시 콜백 함수
};
