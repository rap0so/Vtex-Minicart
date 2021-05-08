import { mocked } from 'ts-jest/utils';
import { getOrderForm as apiGetOrderForm, removeItem as apiRemoveItem } from '@/api';
import { TActionContext } from '@/store/types';
import { TOrderForm } from '@/types';
import { actions, mutations, defaultState } from '@/store';
import { fakeItems } from './mocks/orderFormItems';
import { mockShippingData } from '../Shipping/mocks/shippingData';

const { saveCart, toggleLoading } = mutations;
const { getOrderForm, removeItem } = actions;

jest.mock('@/api');

describe('Mutations', () => {
  it('Should toggle loading status', () => {
    const state = defaultState();

    toggleLoading(state, false);
    expect(state.isLoading).toBe(false);

    toggleLoading(state, true);
    expect(state.isLoading).toBe(true);
  });

  it('Should save empty cart data', () => {
    const state = defaultState();
    const fakeOrderForm: TOrderForm = {
      items: [],
      salesChannel: '1',
      shippingData: null,
      totalizers: [],
      value: 0,
    };

    saveCart(state, fakeOrderForm);
    expect(state.orderForm).toBe(fakeOrderForm);
    expect(state.orderForm.items).toBe(fakeOrderForm.items);
    expect(state.isLoading).toBe(false);
  });

  it('Should save items on cart', () => {
    const state = defaultState();
    const fakeOrderForm: TOrderForm = {
      items: fakeItems,
      shippingData: mockShippingData,
      salesChannel: '1',
      totalizers: [
        { id: 'Items', name: 'Total dos Itens', value: 19999 },
        { id: 'Shipping', name: 'Total do Frete', value: 3970 },
      ],
      value: 150,
    };

    saveCart(state, fakeOrderForm);
    expect(state.orderForm).toBe(fakeOrderForm);
    expect(state.orderForm.items).toBe(fakeOrderForm.items);
    expect(state.orderForm.totalizers).toStrictEqual(fakeOrderForm.totalizers);
    expect(state.isLoading).toBe(false);
  });
});

describe('Actions', () => {
  it('Should invoke API when call action getCart', () => {
    const mockedApiGetCart = mocked(apiGetOrderForm);
    const fakeActionContext = ({
      commit: jest.fn(),
    } as unknown) as TActionContext;

    getOrderForm(fakeActionContext);

    expect(mockedApiGetCart).toHaveBeenCalledTimes(1);
  });

  it('Should invoke API when call action removeItem', () => {
    const fakeIndex = 99;
    const mockedApiRemoveItem = mocked(apiRemoveItem);
    const fakeActionContext = ({
      commit: jest.fn(),
      dispatch: jest.fn(),
    } as unknown) as TActionContext;

    removeItem(fakeActionContext, {
      index: fakeIndex,
    });

    expect(mockedApiRemoveItem).toHaveBeenCalledTimes(1);
    expect(mockedApiRemoveItem).toHaveBeenCalledWith(fakeIndex);
  });
});
