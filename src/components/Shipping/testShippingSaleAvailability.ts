import { TOrderForm } from '@/types';

const testShippingSaleAvailability = (orderform: TOrderForm) => {
  const { shippingData } = orderform;
  if (!shippingData) {
    return false;
  }

  const shippingState = shippingData?.address?.state;

  return shippingState === 'SP';
};

export default testShippingSaleAvailability;
