<template id="">
  <div class="videoBox">
    <header>
      <div class="v-find">
        <span class="yo-ico">&#xe677;</span>
      </div>
      <ul>
        <li :class="{active: index == videoIndex}" v-for="(item,index) in title">{{item}}</li>
      </ul>

    </header>
    <section>
      <div class="swiper-container" id="video-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" id="video-scroll">
            <div class="scroll-container">
              <div class="video-refrash hide">刷新</div>
              <ul>
                <li v-for="(item,index) in list">
                    <p>sososossos</p>
                    <img :src="item.img" alt="">
                </li>
              </ul>
              <div class="video-load hide">加载</div>
            </div>
          </div>
          <div class="swiper-slide">slider2</div>
          <div class="swiper-slide">slider3</div>
          <div class="swiper-slide">slider4</div>
        </div>
      </div>
      <!-- <ul>
        <li>
          <p>sososossos</p>
          <img src="/images/video/video1.png" alt="">
        </li>
      </ul> -->
    </section>
  </div>
</template>

<script>
  var common = require('../utils/util.common.js')
  module.exports = {
    data:function(){
      return{
        swiper:null,
        videoIndex:0,
        title:['推荐','娱乐','搞笑','热点'],
        list:[]
      }
    },
    mounted: function () {
      fetch('/api/video').then(response => response.json())
      .then(res => {

        var that = this;
        that.list = res;
        console.log(that.list.length);
        that.swiper = new Swiper('#video-swiper', {
          loop: false,
          onSlideChangeStart: function(swiper){
            that.videoIndex = swiper.activeIndex;
          }
        });

        // common.isAllLoaded('#video-scroll ul', function () {
        //   common.scroll(that);
        // })
      })
      .catch(e => console.log("Oops, error", e));
    }
  }


</script>
