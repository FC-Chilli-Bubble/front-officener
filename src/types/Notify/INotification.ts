export interface INotification {
  receiverId: number;
  roomId: number;
  content: string;
  type: string;
  menuTag: string;
  createdAt: string;
  read: boolean;
}
