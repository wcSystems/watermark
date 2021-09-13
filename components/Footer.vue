<template>
<div>
  <Dialog @CloseDialog="toggleFilter('cc_modal')" @SendDialog="DialogMethod" />
  <footer id="app_footer" class="footer d-flex justify-content-around" :style="options?`background:${options.bgcolor};color:${options.color}`:``" >
    <slot name="column-1">
      <div  >
        <i class="fas fa-plus-circle" style="width:20px !important;height:20px !important;"></i>
      </div>
    </slot>
    <slot name="column-2">
      <div @click="toggleFilter('cc_modal')" :style="modalActive ? 'color: #00c58e' : 'color: #FFF'"  >
        <i  class="fas fa-th-large" style="width:20px !important;height:20px !important;"></i>
      </div>
    </slot>
    <slot name="column-3">
      <div  >
        <i class="fas fa-save" style="width:20px !important;height:20px !important;"></i>
      </div>
    </slot>
  </footer>
</div>

</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      modalActive: false,
    }
  },
  mounted() {
    this.modalActive = false;
  },
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
  methods:{
    DialogMethod(params) {
      this.$emit("OptionWater", params);
    },
    toggleFilter(modalTarget) {
      if (this.modalActive) {
        this.modalActive = false;
        this.$bvModal.hide(modalTarget);
      } else {
        this.modalActive = true;
        this.$bvModal.show(modalTarget);
      }
    },
  }
};
</script>
<style lang="scss" scoped>
  .footer {
    width: 100%;
    height: 45px !important;
    bottom: 0;
    z-index: 200;
    font-size: 15pt !important;
    display: inline-block;
    padding: 0.5rem;
    text-align: center;
  }
</style>
