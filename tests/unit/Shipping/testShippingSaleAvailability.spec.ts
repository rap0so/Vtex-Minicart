import testShippingSaleAvailability from '@/components/Shipping/testShippingSaleAvailability';
import { TOrderForm } from '@/types';

import { mockShippingData } from './mocks/shippingData';
import { fakeItemBlusa } from '../Store/mocks/orderFormItems';

describe('testShippingSaleAvailability', () => {
  let fakeOrderForm: TOrderForm;

  beforeEach(() => {
    fakeOrderForm = {
      items: [fakeItemBlusa],
      totalizers: [],
      salesChannel: '1',
      shippingData: mockShippingData,
      value: 200,
    };
  });

  it('Should be invoked without crash', () => {
    testShippingSaleAvailability(fakeOrderForm);
  });

  it('Should return FALSE when not receive shippingData', () => {
    fakeOrderForm.shippingData = null;

    const isShippingSaleAvailable = testShippingSaleAvailability(fakeOrderForm);

    expect(isShippingSaleAvailable).toBeFalsy();
  });

  it('Should return FALSE when state is NOT SP', () => {
    if (fakeOrderForm.shippingData) {
      fakeOrderForm.shippingData.address.state = 'SC';
    }

    const isShippingSaleAvailable = testShippingSaleAvailability(fakeOrderForm);

    expect(isShippingSaleAvailable).toBeFalsy();
  });

  it('Should return TRUE when state is SP', () => {
    if (fakeOrderForm.shippingData) {
      fakeOrderForm.shippingData.address.state = 'SP';
    }

    const isShippingSaleAvailable = testShippingSaleAvailability(fakeOrderForm);

    expect(isShippingSaleAvailable).toBeTruthy();
  });
});
