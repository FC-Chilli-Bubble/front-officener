export interface IChat {
  chatRoomId: number;
  storeName: string;
  recentMessage: string;
  numUnreadMessages: number;
  foodTag: string;
}

export interface IChatApiResponse {
  data: {
    chats: IChat[];
  };
}
