import { NOrderFormAddress } from './orderFormAddress.types';
import { NOrderFormItems } from './orderFormItems.types';

export type TOrderFormItems = NOrderFormItems.RootObject[] | [];
export type TOrderFormAddress = NOrderFormAddress.RootObject;

export type TOrderForm = {
  items: TOrderFormItems;
  shippingData: TOrderFormAddress | null;
  totalizers: { id: string; name: string; value: number }[];
  value: number;
  salesChannel: string;
};

export type TAddToCartProps = {
  id: number;
  quantity: number;
  size: string;
  color: string;
  seller: string;
};

export type TAddToCart = (
  items: TAddToCartProps[],
  expectedOrderFormSections: {} | null,
  sc: string,
) => Promise<TOrderForm>;
