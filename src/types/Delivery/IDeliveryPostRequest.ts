export interface IDeliveryPostRequest {
  storeName: string;
  menuLink: string;
  deliveryFee: number | null;
  foodTag: string;
  bankName: string;
  accountNumber: string;
  deadline: string;
  maxAttendees: number | null;
  desc: string;
}
