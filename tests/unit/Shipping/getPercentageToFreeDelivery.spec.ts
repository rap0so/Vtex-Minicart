import getPercentageToFreeDelivery, {
  FREE_SHIPPING_VALUE,
} from '@/components/Shipping/getPercentageToFreeDelivery';

describe('getPercentageToFreeDelivery', () => {
  it('Should be invoked without crash', () => {
    getPercentageToFreeDelivery(1000020222121);
  });

  it('Should return 100 when receive base shipping value to free delivery', () => {
    const percentage = getPercentageToFreeDelivery(FREE_SHIPPING_VALUE);

    expect(percentage).toBe(100);
  });

  it('Should return 50 when receive half of base shipping value to free delivery', () => {
    const percentage = getPercentageToFreeDelivery(FREE_SHIPPING_VALUE / 2);

    expect(percentage).toBe(50);
  });

  it('Should return 100 when receive bigger than base shipping value to free delivery', () => {
    const percentage = getPercentageToFreeDelivery(FREE_SHIPPING_VALUE * 2);

    expect(percentage).toBe(100);
  });
});
