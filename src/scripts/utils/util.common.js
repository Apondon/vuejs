var common = {
	//将dom渲染到页面中
	render:function(str){
		var body = document.body;
		body.innerHTML = str + body.innerHTML;
	},
	//scroll上拉加载下拉刷新功能
	scroll:function(that){
		var myScroll = new IScroll('#index-scroll', {
			probeType: 3,
			mouseWheel: true
		});
		var scrollHeight = 35;

		$('.refrash').removeClass('hide');
		$('.load').removeClass('hide');

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

							myScroll.scrollTo(0, self.maxScrollY - 300);

						})
				}
		})
	},
	//判断图片是否完全加载完毕
	isAllLoaded(scope, cb) {
      var t_img; // 定时器
      var isLoad = true; // 控制变量

      // 判断图片加载状况，加载完成后回调
      return isImgLoad(cb);

      // 判断图片加载的函数
      function isImgLoad(callback) {
          // 查找所有图片，迭代处理
          $(scope).find('img').each(function() {
              // 找到为0就将isLoad设为false，并退出each
              if (this.height === 0) {
                  isLoad = false;
                  return false;
              }
          });
          // 为true，没有发现为0的。加载完毕
          if (isLoad) {
              clearTimeout(t_img); // 清除定时器
              // 回调函数
              callback();
          // 为false，因为找到了没有加载完成的图，将调用定时器递归
          } else {
              isLoad = true;
              t_img = setTimeout(function() {
                  isImgLoad(callback); // 递归扫描
              }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
          }
      }
  },
	// 视频模块scroll上拉加载下拉刷新功能
	videoScroll:function(that){
		var videoScroll = new IScroll('#video-scroll', {
			probeType: 3,
			mouseWheel: true
		});

		var scrollHeight = 35;

		$('.video-refrash').removeClass('hide');
		$('.video-load').removeClass('hide');

		videoScroll.scrollBy(0, -scrollHeight);

		videoScroll.on('scrollEnd', function () {
				if (this.y >= -scrollHeight && this.y < 0) {
						videoScroll.scrollTo(0, -scrollHeight);

				} else if (this.y >= 0) {

						//TODO ajax下拉刷新数据

						setTimeout(function () {
								videoScroll.scrollTo(0, -scrollHeight);

						}, 100);
				}

				var maxY = this.maxScrollY - this.y;
				if (maxY > -scrollHeight && maxY < 0) {
						var self = this;
						videoScroll.scrollTo(0, self.maxScrollY + scrollHeight);

				} else if (maxY >= 0) {

						//TODO ajax上拉加载数据
						var self = this;

						fetch('/api/videomore')
						.then(response => response.json())
						.then(res => {
							that.list = that.list.concat(res);

							videoScroll.refresh();

							videoScroll.scrollTo(0, self.maxScrollY - 375);

						})
				}
		})
	}
}

module.exports = common;
