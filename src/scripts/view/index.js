var Vue = require('../lib/vue');

new Vue ({
	el:'#m-index',
	data:{
		navIndex:0,
		nav:['热点','新闻','体育','财经','娱乐'],
		list:[]
	},

	methods:{
		changeTab:function(index){
			this.swiper.slideTo(index);
			this.navIndex = index;
		}
	},

	mounted:function(){
		fetch('/api/list').then(response => response.json())
		.then(res => {
			var that = this;
			that.list = res;
			that.swiper = new Swiper('#index-swiper',{
				loop:false,
				onSlideChangeStart: function(swiper){
					that.navIndex = swiper.activeIndex;
				}
			})
		}).catch(e => console.log("error",e))
	}
})
