<template>
  <div class="cart-item animate__animated">
    <a
      class="cart-item_title strong-text"
      :href="detailUrl"
      target="_blank"
    >
      {{ name }}
    </a>
    <template v-if="disponivel !== 'available'">
      <div class="product-available">
        <font-awesome-icon
          :icon="iconAlert"
          size="1x"
          class="alertIcon"
        />
        <p>
          Este produto não está disponível no momento
        </p>
      </div>
    </template>
    <div class="cart-item_description">
      <div class="cart-item_propstext">
        <div class="cart-item_propsvalue text">
          Tamanho: {{ getSize|| "Único" }}
        </div>
        <div class="cart-item_propsvalue text">
          Cor: {{ getColor || "Única" }}
        </div>
        <div class="cart-item_propsvalue text">
          Quantidade: {{ quantity }}
        </div>
        <div class="cart-item_propsvalue cart-item_price">
          <p class="strong-text">
            {{ preco }}
          </p>
          <p class="price-describe">
            (unidade)
          </p>
          <div
            class="cart-item_propsvalue icon-trash-wrapper"
            @click="removeItem(index)"
          >
            <font-awesome-icon
              :icon="iconFaTrashAlt"
              size="1x"
              class="trashicon"
            />
            EXCLUIR
          </div>
        </div>
      </div>
      <div class="cart-item_img">
        <img :src="productImage">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrashAlt, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default Vue.extend({
  name: 'CartItem',
  props: {
    name: {
      type: String,
      default: '',
    },
    tamanho: {
      type: String,
      default: '',
    },
    disponivel: {
      type: String,
      default: '',
    },
    detailUrl: {
      type: String,
      default: '#',
    },
    cor: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: NaN,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    preco: {
      type: String,
      default: '',
    },
    productImage: {
      type: String,
      default: '',
    },
  },
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      iconFaTrashAlt: faTrashAlt,
      iconAlert: faExclamationTriangle,
    };
  },
  methods: {
    removeItem(index: number) {
      // TODO: add nimation here
      // const currentItemElement = this.$el as HTMLElement;
      // currentItemElement.classList.add('animate__fadeOutRight');
      this.$store.dispatch('removeItem', {
        index,
      });
    },
  },
  computed: {
    getSize() {
      let size = '';
      if (localStorage) {
        const item = localStorage.getItem(this.$props.id);
        if (item) {
          const itemOBj = JSON.parse(item);
          size = itemOBj?.size.toString();
        }
      }
      return size;
    },
    getColor() {
      let color = '';
      if (localStorage) {
        const item = localStorage.getItem(this.$props.id);
        if (item) {
          const itemOBj = JSON.parse(item);
          color = itemOBj?.color.toString();
        }
      }
      return color;
    },
  },
});
</script>

<style lang="scss" scoped>
@import './cartItem';
</style>
