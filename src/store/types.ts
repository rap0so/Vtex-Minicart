import { ActionContext } from 'vuex';
import { TOrderForm, TOrderFormItems } from '../types';

export type TDefaultStateObj = {
  isLoading: boolean;
  items: TOrderFormItems;
  shippingValue: number;
  orderForm: TOrderForm;
};

export type TDefaultState = () => TDefaultStateObj;

export type TActionContext = ActionContext<TDefaultStateObj, TDefaultStateObj>;

export type TCommitContext = TActionContext['commit'];

export type TRemoveItemProps = {
  index: number;
  callback?: () => void;
};
