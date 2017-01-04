var common = require('../utils/util.common.js');


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
			});
			// console.log($('#index-scroll'));
			setTimeout(function(){
				common.scroll(that);
			},0)
		}).catch(e => console.log("error",e));
	}
})
