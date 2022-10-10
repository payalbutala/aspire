import { CardDetails } from './card-details';
import { TransactionItem } from './transaction-item';

export type Card = {
  id: number;
  name: string;
  cardNumber: number;
  validityDate: string;
  cvvDetails: number;
  isFreeze: boolean;
  transactionLimit: number;
  toPay: boolean;
  isReplace: boolean;
  isCancel: boolean;
  cardDetails: CardDetails;
  transactions: TransactionItem[];
};
