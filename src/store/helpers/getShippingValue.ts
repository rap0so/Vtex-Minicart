import { TOrderForm } from '@/types';

const getShippingValue = (orderForm: TOrderForm) => {
  const shippingData = orderForm?.totalizers.find((item) => item.id === 'Shipping');
  if (!shippingData) return 0;

  return shippingData.value;
};

export default getShippingValue;
