import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/sass/main.scss";
import "@/assets/sass/responsive.scss";

import GlobalComponents from "@/globalComponents";
import GlobalPlugins from "@/globalPlugins";

Vue.config.productionTip = false

Vue.use(GlobalPlugins);

Vue.use(GlobalComponents);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
