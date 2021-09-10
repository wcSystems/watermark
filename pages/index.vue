<template>
  <div>
    <Header :options="{ text:'WATERMARK IMG', color:'#fff', bgcolor:'#00c58e' }" />
    <div class="w-100 m-auto text-center">
      <div style="height: calc(100vh - 89px) !important;" >
        <img
          alt="ad-thumb" style="height:100%;object-fit: cover;" class="d-block w-100 ad-thumb"
          src="https://picsum.photos/300/800"
          v-watermark="$auth.$storage.getUniversal('optionwater')"/>
      </div>
    </div>
    <Footer :options="{ text:'PROCESAR', color:'#fff', bgcolor:'#343a40' }" @OptionWater="OptionWaterMethod" />
  </div>
</template>

<script>
  export default {
    name: "Water",
    head() {
    return {
      title: "Marca de Agua",
    };
  },
  methods:{
    OptionWaterMethod(params) {
      this.$auth.$storage.setUniversal("optionwater", params);
      this.$router.go()
    },
  }
  }
</script>
