<template>
  <div class="flex loading">
    <font-awesome-icon
      :icon="faCircleNotchIcon"
      spin
      size="3x"
    />
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import Vue from 'vue';

export default Vue.extend({
  name: 'Loading',
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faCircleNotchIcon: faCircleNotch,
    };
  },
});
</script>

<style lang="scss">
@import './loading';
</style>
