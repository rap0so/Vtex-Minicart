// TODO: test it
const getOrderForm = () => window?.vtexjs?.checkout?.orderForm;
const getSkuJson = () => window?.skuJson_0?.skus[0].dimensions;

const removeItem = (index: number) => window.vtexjs?.checkout.removeItems([
  {
    quantity: window.vtexjs?.checkout?.orderForm?.items?.[index]?.quantity,
    index,
  },
]);

export { getOrderForm, removeItem, getSkuJson };
