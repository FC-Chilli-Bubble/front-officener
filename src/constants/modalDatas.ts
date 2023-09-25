const MODAL_DATAS = {
  testModal: {
    title: '채팅방을 나가시겠습니까?',
    content: '호스트가 퇴장하면 채팅방이 사라집니다.',
    positive: '나가기',
    negative: '닫기'
  },
  WARN_NOT_SAVED: {
    title: '앗! 잠시만요',
    content: '나가시면 작성중인 정보가 사라집니다',
    positive: '나가기',
    negative: '취소'
  },
  LOGOUT_CONFIRM: {
    title: '정말 로그아웃 하시겠습니까?',
    positive: '취소',
    negative: '확인'
  },
  DEADLINE_ERROR: {
    title: '현재 시간보다 이전 시간은 선택할 수 없습니다',
    positive: '확인'
  },
  DELIVERY_POST_SUCCESS: {
    title: '함께배달',
    content: '게시글을 성공적으로 올렸습니다',
    positive: '확인'
  },
  DELIVERY_POST_FAILURE: {
    title: '함께배달',
    content: '게시글 올리기를 실패했습니다\n다시 시도해주세요',
    positive: '확인'
  },
  DELIVERY_POST_BANK_FAILURE: {
    title: '함께배달',
    positive: '확인'
  },
  DELIVERY_POST_DELETE: {
    title: '게시글을 정말 삭제하시겠습니까?',
    content: '게시글을 삭제하면 게스트와 소통이 불편해질 수 있어요',
    positive: '삭제',
    negative: '취소'
  },
  DELIVERY_POST_DELETE_FAILURE: {
    title: '삭제',
    content: '게시글 삭제 중 오류가 발생했습니다',
    positive: '확인'
  }
};

export default MODAL_DATAS;
