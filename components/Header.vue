<template>
  <div id="app_header" class="header" :style="cssVars">
    <slot name="column-1">
      <div>
        {{ options.text }}
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    options: {
      type: Object,
      default: () => ({
        text: 'Default',
        color: '#fff',
        bgcolor: '#3c3c3c',
      }),
    },
  },
  computed: {
    cssVars() {
      return {
        '--color': `${this.options.color} !important`,
        '--bgcolor': `${this.options.bgcolor} !important`
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  .header {
    background: var(--bgcolor);
    width: 100%;
    height: 45px !important;
    top: 0;
    z-index: 200;
    color: var(--color);
    font-size: 15pt !important;
    display: inline-block;
    padding: 0.5rem;
    text-align: center;
  }
</style>
