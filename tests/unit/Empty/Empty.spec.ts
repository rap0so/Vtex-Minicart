import { mount, shallowMount } from '@vue/test-utils';
import Empty from '@/components/Empty';

describe('Empty', () => {
  it('Should render without crash', () => {
    shallowMount(Empty);
  });

  it('Should render all elements', () => {
    const wrapper = shallowMount(Empty);

    const text = wrapper.find('.text');
    const boldText = wrapper.find('.strong-text');
    const icon = wrapper.find('font-awesome-icon-stub');

    expect(text.text()).toBe('Você ainda não adicionou nenhum produto ao seu carrinho!');
    expect(boldText.text()).toBe('Seu carrinho está vazio!');
    expect(icon);
  });

  it('Should render shopping cart on icon', () => {
    const wrapper = mount(Empty);

    const icon = wrapper.find('.icon svg');
    const iconClasses = icon.classes();

    const containShoppingCartClass = iconClasses.includes('fa-shopping-cart');

    expect(containShoppingCartClass).toBeTruthy();
  });
});
