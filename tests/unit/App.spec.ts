import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
  it('Should renders App without crash', () => {
    shallowMount(App);
  });
});
