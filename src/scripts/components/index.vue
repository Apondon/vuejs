<template id="">
	<div class="m-index" id="m-index">
		<router-view></router-view>
		<footer>
			<ul>
        <li @click="changeNav(index)" :class="{active: index==navIndex}" v-for="(fn,index) in footerNav">
          <router-link :to="fn.router">
            <i class="yo-ico" v-html="fn.ico"></i>
            <span>{{fn.title}}</span>
          </router-link>
        </li>
      </ul>
		</footer>
	</div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        navIndex: 0,
        footerNav: [
          {
            router: '/',
            ico: '&#xe608;',
            title: '首页'
          },
          {
            router: '/video',
            ico: '&#xe60d;',
            title: '视频'
          },
          {
            router: '/user',
            ico: '&#xe648;',
            title: '我的'
          }
        ]
      }
    },
    methods: {
      changeNav: function (index) {
        this.navIndex = index;
      }
    }
  }
</script>
