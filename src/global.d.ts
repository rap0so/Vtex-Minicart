import { TOrderForm, TAddToCart } from './types';

type TRemoveItemsProps = { index: number; quantity: number };
declare global {
  interface Window {
    skuJson: {} | null;
    skuJson_0: {
      skus: [{
        dimensions: {
          color: string;
          size: string;
        };
      }];
    } | null;
    vtexjs: {
      checkout: {
        addToCart: TAddToCart;
        orderForm: TOrderForm;
        removeItems: (args: TRemoveItemsProps[]) => Promise<TOrderForm>;
      };
    };
  }
}
