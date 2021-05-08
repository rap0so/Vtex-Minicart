<template>
  <container :is-empty="isEmpty">
    <div v-if="isLoading">
      <loading />
    </div>

    <div v-else>
      <div v-if="isEmpty">
        <empty />
      </div>

      <div v-else>
        <cart-item-container />
        <hr class="separator">
        <shipping v-if="isShippingSaleAvailable" />
        <total-cart />
      </div>
    </div>
  </container>
</template>

<script lang="ts">
import Vue from 'vue';
import Vuex from 'vuex';
import KProgress from 'k-progress';
import CartItemContainer from '@/components/CartItemContainer';
import Container from '@/components/Container';
import Empty from '@/components/Empty';
import Shipping from '@/components/Shipping';
import Loading from '@/components/Loading';
import TotalCart from '@/components/TotalCart';

import store from './store';
import testShippingSaleAvailability from './components/Shipping/testShippingSaleAvailability';

Vue.component('k-progress', KProgress);
Vue.use(Vuex);

export default Vue.extend({
  name: 'App',
  components: {
    CartItemContainer,
    Container,
    Empty,
    Shipping,
    TotalCart,
    Loading,
  },
  computed: {
    isEmpty() {
      return !this.$store?.state?.items?.length;
    },
    isLoading() {
      return this.$store?.state?.isLoading;
    },
    isShippingSaleAvailable() {
      const orderForm = this.$store?.state?.orderForm;
      if (!orderForm) {
        return false;
      }

      return testShippingSaleAvailability(orderForm);
    },
  },
  store: new Vuex.Store(store),
});
</script>

<style lang="scss">
@import '~normalize.css';
@import '~animate.css';
@import './app';
</style>
