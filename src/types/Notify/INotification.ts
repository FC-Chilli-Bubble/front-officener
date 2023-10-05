export interface INotification {
  id: number;
  receiverId: number;
  roomId: number;
  content: string;
  type: string;
  menuTag: string;
  createdAt: string;
  read: boolean;
}

type FcmStatus = 'ACTIVATE' | 'INACTIVATE' | 'KEEP';

export interface IFcmTokenStatus {
  fcmToken: string;
  type: FcmStatus;
}
