// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTuicalendar from '@lkmadushan/vue-tuicalendar'
import Vuefire from 'vuefire'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VSelect,
  VChip,
  VBtn,
  VBadge,
  VIcon,
  VGrid,
  VToolbar,
  VBottomNav,
  VDivider,
  VDialog,
  VSubheader,
  VCard,
  VCheckbox,
  transitions
} from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import '../node_modules/vuetify/src/stylus/app.styl'
import 'tui-calendar/dist/tui-calendar.min.css'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VSelect,
    VChip,
    VBtn,
    VBadge,
    VIcon,
    VGrid,
    VToolbar,
    VBottomNav,
    VDivider,
    VDialog,
    VSubheader,
    VCard,
    VCheckbox,
    transitions
  },
  theme: {
    primary: '#CC8E40',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    dankook_blue: '#00529C'
  }
});

Vue.use(VueTuicalendar);
Vue.use(Vuefire);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
