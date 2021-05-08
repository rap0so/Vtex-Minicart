<template>
  <div
    v-if="isOpen"
    class="minicart-container"
  >
    <div
      class="minicart-container_overlay"
      @click="onMinicartToggle"
    />
    <div class="flex minicart-container_title-wrapper">
      <h3 class="minicart-container_title">
        Meu carrinho
      </h3>

      <span
        class="minicart-container_close-button-mobile"
        @click="onMinicartToggle"
      />
    </div>
    <hr class="separator">
    <div class="minicart-container_wrapper">
      <slot />

      <div>
        <a
          class="minicart-container_finish-button strong-text"
          href="/checkout#/cart"
          v-if="!isEmpty"
        >
          Finalizar Compra
          <span class="minicart-container_icon-wrapper">
            <font-awesome-icon
              :icon="arrowToRightIcon"
              size="sm"
            />
          </span>
        </a>

        <button
          class="minicart-container_keep-button"
          @click="onMinicartToggle"
        >
          Continuar comprando
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Vue from 'vue';
import interceptBuyButton from '@/functions/interceptBuyButton';

export default Vue.extend({
  name: 'Container',
  components: {
    FontAwesomeIcon,
  },
  props: {
    isEmpty: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      arrowToRightIcon: faChevronRight,
      isOpen: false,
    };
  },
  mounted() {
    const minicartToggleButton = document.querySelector('.header__content--item.header__minicart');

    minicartToggleButton?.addEventListener('click', this.onMinicartToggle);
    interceptBuyButton(this.onMinicartToggle, this.onUpdateCart);
  },
  methods: {
    onMinicartToggle(event: Event) {
      event?.preventDefault();

      this.onUpdateCart();
      this.$store.commit('toggleLoading', true);
      this.isOpen = !this.isOpen;
    },
    onUpdateCart() {
      this.$store?.dispatch('getOrderForm');
    },
  },
});
</script>

<style lang="scss" scoped>
@import './container';
</style>
