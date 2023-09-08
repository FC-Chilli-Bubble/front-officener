export interface IModal {
  title: string;
  content?: string;
  positive: string;
  positiveCallback: () => void;
  negative?: string;
  negativeCallback?: () => void;
}
