require('./styles/usage/app.scss');

// var common = require('./scripts/utils/util.common.js');
// var html = require('./scripts/tpls/index.string');
//
// common.render(html);
//
// require('./scripts/view/index.js');

// components
import index from "./scripts/components/index.vue";
import home from "./scripts/components/home.vue";

// router
const routes = [
  {path:'/',component:index}
];

const router =new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app')
