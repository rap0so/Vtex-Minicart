import { shallowMount } from '@vue/test-utils';
import CartItemContainer from '@/components/CartItemContainer/CartItemContainer.vue';

describe('CartItemContainer', () => {
  it('Should renders CartItemContainer without crash', () => {
    shallowMount(CartItemContainer);
  });
});
