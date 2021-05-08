<template>
  <div class="empty">
    <div class="icon">
      <font-awesome-icon
        :icon="iconShoppingCart"
        size="2x"
      />
    </div>

    <b class="strong-text empty_title">Seu carrinho está vazio!</b>
    <p class="text empty_description">
      Você ainda não adicionou nenhum produto ao seu carrinho!
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default Vue.extend({
  name: 'Empty',

  data() {
    return {
      iconShoppingCart: faShoppingCart,
    };
  },

  components: {
    FontAwesomeIcon,
  },
});
</script>

<style lang="scss" scoped>
@import './empty';
</style>
