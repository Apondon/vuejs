<template id="">
	<div class="m-index" id="m-index">
		<router-view></router-view>
		<footer>
			<!-- <ul>
				<li>
					<i class="yo-ico">&#xe608;</i>
					<span>首页</span>
				</li>
				<li>
					<i class="yo-ico">&#xe60d;</i>
					<span>视频</span>
				</li>
				<li>
					<i class="yo-ico">&#xe648;</i>
					<span>我的</span>
				</li>
			</ul> -->
			<ul>
        <li @click="changeNav(i)" :class="{active: i==navIndex}" v-for="(fn,i) in footerNav">
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
            router: '/',
            ico: '&#xe60d;',
            title: '视频'
          },
          {
            router: '/',
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
