<template>
  <div class="cart-item-container">
    <vuescroll
      :ops="vueScrollOptions"
    >
      <CartItem
        v-for="(item, index) in items"
        :id="item.id"
        :index="index"
        :key="index"
        :name="item.name"
        :tamanho="item.size"
        :quantity="item.quantity"
        :cor="item.color"
        :detail-url="item.detailUrl"
        :preco="formatPrice(item.price)"
        :product-image="item.imageUrl"
        :disponivel="item.availability"
      />
    </vuescroll>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import vuescroll from 'vuescroll';
import CartItem from '@/components/CartItem';
import formatPrice from '@/helpers/formatPrice';

export default Vue.extend({
  name: 'CartItemContainer',
  data() {
    return {
      vueScrollOptions: {
        bar: {
          size: '3px',
          background: '#fdd835',
        },
        rail: {
          gutterOfSide: '0',
        },
      },
    };
  },
  components: {
    CartItem,
    vuescroll,
  },
  methods: {
    formatPrice,
  },
  computed: {
    items() {
      return this.$store?.state?.items ?? [];
    },
  },
});

</script>

<style lang="scss" scoped>
@import './cartItemContainer';
</style>
