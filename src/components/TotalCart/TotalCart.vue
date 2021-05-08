<template>
  <div class="totalcart">
    <div class="flex">
      <p class="totalcart_title">
        Itens:
      </p>
      <p class="totalcart_value">
        {{ totalItems }}
      </p>
    </div>

    <div
      v-if="userHasAddress"
      class="flex"
    >
      <b class="totalcart_title">
        Frete:
      </b>
      <b class="totalcart_value">
        {{ shippingValue }}
      </b>
    </div>

    <div class="flex">
      <b class="totalcart_title">
        Subtotal:
      </b>
      <b class="totalcart_value">
        {{ subTotal }}
      </b>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import formatPrice from '@/helpers/formatPrice/';
import { FREE_SHIPPING_VALUE } from '../Shipping/getPercentageToFreeDelivery';
import testShippingSaleAvailability from '../Shipping/testShippingSaleAvailability';

export default Vue.extend({
  name: 'TotalCart',
  data() {
    return {
      shippingValue: '',
      subTotal: '',
    };
  },
  mounted() {
    const store = this.$store?.state ?? {};
    const orderForm = store?.orderForm ?? {};
    const orderFormValue = orderForm?.value ?? 0;
    const storeShippingValue = store?.shippingValue ?? 0;
    const clientIsAvailableToFreeShipping = testShippingSaleAvailability(orderForm);
    const isFreeDelivery = clientIsAvailableToFreeShipping
      && (orderFormValue >= FREE_SHIPPING_VALUE);

    this.shippingValue = isFreeDelivery ? 'Frete Grátis' : formatPrice(storeShippingValue);
    this.subTotal = formatPrice(orderFormValue);
  },
  computed: {
    totalItems() {
      const storeItems = this.$store?.state.orderForm.items ?? [];

      const items = storeItems.filter((row: { availability: string }) => row.availability.match(/available/));

      return items.reduce(
        (accumulator: number, item: { quantity: number }) => accumulator + item.quantity,
        0,
      );
    },
    userHasAddress() {
      return this.$store?.state?.orderForm?.shippingData?.address;
    },
  },
});
</script>

<style lang="scss" scoped>
@import './totalcart';
</style>
