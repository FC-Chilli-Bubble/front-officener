type DeliveryDetailStatus = 'ACTIVE' | 'CLOSED' | 'TERMINATED';
export interface IDeliveryPost {
  roomId: number;
  hostId: number;
  hostName: string;
  storeName: string;
  menuLink: string;
  deliveryFee: number;
  tag: string;
  bankName: string;
  account: string;
  deadline: string;
  attendees: number;
  maxAttendees: number;
  description: string;
  isJoin: boolean;
  status: DeliveryDetailStatus;
  createdAt: string;
  updatedAt: string;
}
