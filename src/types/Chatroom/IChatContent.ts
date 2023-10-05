export interface IChatData {
  messageId: number;
  messageType: string;
  content: string;
  senderId: number;
  sendTime: string;
}

export interface IMemberData {
  id: number;
  name: string;
  companyName: string;
  profileImage: string;
  amI: boolean;
  isHost: boolean;
  hasRemitted: boolean;
  hasReceived: boolean;
}

export interface IChat {
  messages: IChatData[];
}

export interface IChatAndMembers {
  messages: IChatData[];
  members: IMemberData[];
}
