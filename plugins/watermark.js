import Vue from "vue";
import watermark from '@serializedowen/vue-img-watermark';


import {
  BootstrapVue,
  BIcon,
  BIconInfoSquare,
  BIconInfoSquareFill,
} from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.component('BIcon', BIcon)
Vue.component('BIconInfoSquare', BIconInfoSquare)
Vue.component('BIconInfoSquareFill', BIconInfoSquareFill),




Vue.use(watermark)
