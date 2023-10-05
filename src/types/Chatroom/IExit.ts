export interface IKickRequest {
  kickRequest: string;
  kickReason: string;
}

export interface IKick {
  kickedUserId: number;
}

export interface IChatExitRes {
  messageType: number;
  content: string;
  sendTime: string;
  senderId: number;
}
