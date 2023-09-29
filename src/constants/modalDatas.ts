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
  },
  DELIVERY_POST_EDIT_CONFIRM: {
    title: '게시글을 정말 수정하시겠습니까?',
    positive: '수정',
    negative: '취소'
  },
  DELIVERY_POST_EDIT_SUCCESS: {
    title: '함께배달 수정',
    content: '게시글을 성공적으로 수정했습니다',
    positive: '확인'
  },
  DELIVERY_POST_EDIT_FAILURE: {
    title: '함께배달 수정',
    content: '게시글 수정을 실패했습니다\n다시 시도해주세요',
    positive: '확인'
  },
  DELIVERY_POST_DETAIL_FAILURE: {
    title: '함께배달',
    content: '게시글 조회를 실패했습니다\n다시 시도해주세요',
    positive: '확인'
  },
  DELIVERY_CHAT_JOIN_FAILURE: {
    title: '함께배달',
    content: '함께배달 참여에 실패했습니다\n다시 시도해주세요',
    positive: '확인'
  },
  DELIVERY_CHAT_JOIN_CONFIRM: {
    title: '함께배달에 참여하시겠습니까?',
    content: '참여 이후에는 호스트의 승인을 받아야 나가실 수 있습니다',
    positive: '확인'
  },
  DELIVERY_DETAIL_INVALID: {
    title: '유효하지 않은 게시글입니다.',
    positive: '뒤로가기'
  },
  SESSION_EXPIRATION_ALERT: {
    title: '로그인 세션 만료',
    content: '로그인 세션이 만료되었습니다.\n다시 로그인해주세요.',
    positive: '확인'
  },
  NOTIFICATIONS_FETCH_FAILURE: {
    title: '알림 목록을 가져오는데 실패했습니다',
    positive: '확인'
  },
  NOTIFICATIONS_UPDATE_FAILURE: {
    title: '유효하지 않은 알림입니다',
    positive: '확인'
  }
};

export default MODAL_DATAS;
