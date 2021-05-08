import { shallowMount } from '@vue/test-utils';
import TotalCart from '@/components/TotalCart/TotalCart.vue';

describe('TotalCart', () => {
  it('Should renders TotalCart without crash', () => {
    shallowMount(TotalCart);
  });
});
