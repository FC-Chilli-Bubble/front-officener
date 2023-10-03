export interface IRoom {
  roomId: number;
  hostId: number;
  storeName: string;
  menuLink: string;
  deliveryFee: number;
  tag: string;
  attendees: number;
  maxAttendees: number;
  deadLine: string;
  roomStatus: string;
  createdAt: string;
  updatedAt: string;
}

export interface IApiResponse {
  currentPage: number;
  totalPage: number;
  totalElements: number;
  data: {
    rooms: IRoom[];
  };
}
