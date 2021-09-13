<template>
  <div id="app_header" class="header" :style="options?`background:${options.bgcolor};color:${options.color}`:``">
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
  }
};
</script>
<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 45px !important;
    top: 0;
    z-index: 200;
    font-size: 15pt !important;
    display: inline-block;
    padding: 0.5rem;
    text-align: center;
  }
</style>
