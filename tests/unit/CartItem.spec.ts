import { shallowMount } from '@vue/test-utils';
import CartItem from '@/components/CartItem';

describe('CartItem', () => {
  it('Should renders CartItem without crash', () => {
    shallowMount(CartItem);
  });
});
