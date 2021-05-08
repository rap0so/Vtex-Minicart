// TODO: test it
<template>
  <div class="shipping">
    <k-progress
      :percent="percentageLeftToFreeDelivery"
      :color="progressBar.fromColorToColor"
      :bg-color="progressBar.backgroundColor"
      :show-text="progressBar.showText"
    />

    <div
      class="minicart-shipping_discount"
      v-if="percentageLeftToFreeDelivery === 100"
    >
      <p class="minicart-shipping__text">
        <strong>VOCÊ ATIVOU A PROMOÇÃO DE <br>
          <b>FRETE GRÁTIS PARA A CIDADE DE SÃO PAULO</b>
        </strong>
      </p>
    </div>
    <div v-else>
      FALTAM <b class="minicart-shipping__label--value">
        {{ valueToFreeDelivery }}</b> PARA ATIVAR A PROMOÇÃO DE <br>
      <b>FRETE GRÁTIS</b> PARA A CIDADE DE <b>SÃO PAULO</b>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import formatPrice from '@/helpers/formatPrice/';
import getPercentageToFreeDelivery, { FREE_SHIPPING_VALUE } from './getPercentageToFreeDelivery';

const createData = (totalCartValue: number) => {
  const valueToFreeDelivery = formatPrice(FREE_SHIPPING_VALUE - totalCartValue);

  return {
    percentageLeftToFreeDelivery: getPercentageToFreeDelivery(totalCartValue),
    totalCartValue,
    valueToFreeDelivery,
  };
};

export default Vue.extend({
  name: 'Shipping',
  data() {
    return {
      ...createData(this.$store?.state?.orderForm?.value),
      progressBar: {
        backgroundColor: '#c3c3c3',
        fromColorToColor: '#333',
        showText: false,
      },
    };
  },
  mounted() {
    this.resetShippingData();
  },
  methods: {
    resetShippingData() {
      Object.assign(this.$data, createData(this.$store?.state?.orderForm?.value));
    },
  },
});
</script>

<style lang="scss" scope>
@import './shipping'
</style>
