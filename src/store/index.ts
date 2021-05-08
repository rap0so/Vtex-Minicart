import { getOrderForm as apiGetOrderForm, getSkuJson as apiGetDimensions, removeItem as apiRemoveItem } from '@/api';
import { TOrderForm } from '../types';
import getShippingValue from './helpers/getShippingValue';
import {
  TActionContext, TDefaultState, TDefaultStateObj, TRemoveItemProps,
} from './types';

export const defaultState: TDefaultState = () => ({
  isOpen: false,
  isLoading: true,
  items: [],
  shippingValue: 0,
  orderForm: {
    items: [],
    shippingData: null,
    totalizers: [],
    salesChannel: '',
    value: 0,
  },
});

export const mutations = {
  saveCart(state: TDefaultStateObj, orderForm: TOrderForm) {
    state.orderForm = orderForm;
    state.items = orderForm?.items;
    state.shippingValue = getShippingValue(orderForm);
    state.isLoading = false;
  },
  toggleLoading(state: TDefaultStateObj, status: boolean) {
    state.isLoading = status;
  },
};

export const actions = {
  getOrderForm: async ({ commit }: TActionContext) => {
    commit('toggleLoading', true);
    const orderForm = await apiGetOrderForm();

    const size = document.querySelector('#espec_1_opcao_0 > option:checked')?.getAttribute('value');
    const color = document.querySelector(".sku-selector[data-dimension='Cor']:checked")?.getAttribute('specification');
    const skuJSON = await apiGetDimensions();
    commit('saveCart', orderForm);
  },
  removeItem: async ({ commit, dispatch }: TActionContext, options: TRemoveItemProps) => {
    commit('toggleLoading', true);
    await apiRemoveItem(options.index);
    options?.callback?.();
    dispatch('getOrderForm');
  },
};

export default {
  state: defaultState(),
  mutations,
  actions,
};
