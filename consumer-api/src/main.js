import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'

// componentes globais
import LayoutLogin from './layouts/LayoutLogin'
import LayoutDefault from './layouts/LayoutDefault'

import Search from './components/Search'
import ModalDelete from './components/ModalDelete'
import ModalEdit from './components/ModalEdit'
import ModalView from './components/ModalView'

Vue.component('layout-login', LayoutLogin)
Vue.component('layout-default', LayoutDefault)

Vue.component('search-global', Search)
Vue.component('ModalDelete', ModalDelete)
Vue.component('ModalEdit', ModalEdit)
Vue.component('ModalView', ModalView)

// // Padronização layout
import { input } from './components/attr-defaults'

Vue.prototype.$input = input

Vue.mixin({
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.sm
    }
  }
})


const config = {
  theme: {
    themes: {
      light: {
        primary: '#288041',
        secondary: '#FF5D31',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
}

Vue.config.productionTip = false

Vue.use(Vuetify, config)


Vue.prototype.axios = axios

new Vue({
  router: Router,
  vuetify: new Vuetify({
  icons: {
    iconfont: 'fa4'
  },
}),
  render: h => h(App),
}).$mount('#app')
