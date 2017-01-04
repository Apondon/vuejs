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
				var myScroll = new IScroll('#index-scroll', {
					probeType: 3,
					mouseWheel: true
				});
				var scrollHeight = 35;

        myScroll.scrollBy(0, -scrollHeight);

        myScroll.on('scrollEnd', function () {
            if (this.y >= -scrollHeight && this.y < 0) {
                myScroll.scrollTo(0, -scrollHeight);

            } else if (this.y >= 0) {

                //TODO ajax下拉刷新数据

                setTimeout(function () {
                    myScroll.scrollTo(0, -scrollHeight);

                }, 100);
            }

            var maxY = this.maxScrollY - this.y;
            if (maxY > -scrollHeight && maxY < 0) {
                var self = this;
                myScroll.scrollTo(0, self.maxScrollY + scrollHeight);

            } else if (maxY >= 0) {

                //TODO ajax上拉加载数据
                var self = this;

                fetch('/api/listmore')
                .then(response => response.json())
                .then(res => {
                  that.list = that.list.concat(res);

                  myScroll.refresh();

                  myScroll.scrollTo(0, self.y + scrollHeight);

                })


            }
        })
				// myScroll.refresh();
			},0)
		}).catch(e => console.log("error",e));
	}
})
