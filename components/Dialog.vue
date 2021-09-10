<template>
  <b-modal id="cc_modal" hide-footer hide-header pos="dialog-lower-setting" >
    <div class="container px-0">
      <div class="row">
        <div class="col-12 px-0">
          <button class="btn bg-tranparent p-0 w-100 text-right" style="color: #00c58e;margin-bottom:0.5rem" @click="filter">
            Procesar
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <input type="text" placeholder="@willinthontech" class="form-control" id="text1" v-model="option_water.content"  />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-4 text-center">
            <button class="btn p-0 text-center rounded-circle" style="background: #fff;width:38px;height:38px;border: 1px solid #ced4da" @click="option_water.fillStyle = 'white'"></button>
          </div>
          <div class="col-4 text-center">
            <button class="btn p-0 text-center rounded-circle" style="background: #00c58e;width:38px;height:38px;border: 1px solid #ced4da" @click="option_water.fillStyle = 'green'"></button>
          </div>
          <div class="col-4 text-center">
            <button class="btn p-0 text-center rounded-circle" style="background: #000;width:38px;height:38px;border: 1px solid #ced4da" @click="option_water.fillStyle = 'black'"></button>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-3 text-center">
              <button class="btn p-0 text-center w-100 typeMark" @click="option_water.mode = 'center'" > Center</button>
          </div>
          <div class="col-3 text-center">
              <button class="btn p-0 text-center w-100 typeMark" @click="option_water.mode = 'topleft'" > T-Left</button>
          </div>
          <div class="col-3 text-center">
              <button class="btn p-0 text-center w-100 typeMark" @click="option_water.mode = 'bottomright'" > B-Right</button>
          </div>
          <div class="col-3 text-center">
              <button class="btn p-0 text-center w-100 typeMark" @click="option_water.mode = 'fill'" > Fill</button>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>
<script>
export default {
  name: "Dialog",
  data() {
    return {
      option_water: null
    };
  },
  fetch(){
    this.option_water = this.$auth.$storage.getUniversal("optionwater")
  },
  methods: {
    filter() {
      this.$emit("SendDialog", this.option_water);
      this.$emit("CloseDialog");
    },
  },
};
</script>
<style lang="scss">
  .typeMark{
    font-size:12px !important;
    background: #fff;
    height:38px;
    border: 1px solid #ced4da
  }
  @keyframes fadeDown {
    100% {
      opacity: 0;
    }
  }
  @keyframes fadeUp {
    0% {
      opacity: 0;
    }
  }
  @keyframes slideDown {
    100% {
      opacity: 0;
      transform: translateY(100%);
    }
  }
  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slideLeft {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes slideRight {
    100% {
      opacity: 0;
      transform: translateX(100%);
    }
  }

  [pos="dialog-lower-setting"] {
    .modal {
      bottom: 45px !important;
      top: auto !important;
      height: auto !important;
      &-backdrop {
        animation: fadeUp 0.3s ease-in-out;
      }
      &-dialog {
        animation: slideUp 0.3s ease-in-out;
      }
    }
    .modal-content {
      border-radius: 0 !important;
      transition: 0.3s;
    }
    .modal-body {
      padding: 0.5rem 1.5rem !important;
    }
    .modal-dialog {
      max-width: 100%;
      margin: 0 !important;
    }
    .ctm {
      &-fs {
        font-size: 12px !important;
      }
    }
    [aria-hidden="true"] {
      .modal {
        &-content {
          height: 100px;
          animation: fadeDown 0.3s ease !important;
        }
        &-dialog {
          animation: slideDown 0.3s ease !important;
        }
      }
    }
  }
</style>
