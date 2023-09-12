export interface IDeliveryPostRequest {
  storeName: string;
  storeLink: string;
  deliveryTip: number | null;
  tag: string;
  bank: string;
  account: string;
  closedTime: string;
  maximumNum: number | null;
  decription: string;
}
