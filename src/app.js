require('./styles/usage/app.scss');

var layout = require('./scripts/tpls/layout.string');
var common = require('./scripts/utils/util.common.js');

common.render(layout);


// components
import index from "./scripts/components/index.vue";
import home from "./scripts/components/home.vue";

// vue2.1 router
const routes = [{
    path: '/',
    component: index,
    children: [{
        path: '/',
        component: home
    }]
}];

const router =new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app')
