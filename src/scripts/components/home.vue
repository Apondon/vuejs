<template id="">
  <div class="container">
    <header>
      <p>趣头条</p>
      <router-link v-bind:to="'/search'">
        <span class="yo-ico">&#xe677;</span>
        </router-link>
    </header>
    <nav>
      <ul>
        <li @click="changeTab(index)" :class="{active: index == navIndex}" v-for="(item,index) in nav"><span>{{item}}</span></li>
      </ul>
    </nav>
    <section>
      <div class="swiper-container" id="index-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" id="index-scroll">
            <div class="scroll-container">
              <div class="refrash hide">刷新</div>
              <ul>
                <li v-for="item in list">
                  <img :src="item.img">
                  <div>
                    <p>{{item.tit}}</p>
                    <span>{{item.cmt}}评</span>
                  </div>
                </li>
              </ul>
              <div class="load hide">加载</div>
            </div>
          </div>
          <div class="swiper-slide">slider2</div>
          <div class="swiper-slide">slider3</div>
          <div class="swiper-slide">slider4</div>
          <div class="swiper-slide">slider5</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  var common = require('../utils/util.common.js');

  module.exports = {
    data:function(){
      return{
        swiper:null,
        navIndex:0,
        nav:['热点','新闻','体育','财经','娱乐'],
        list:[]
      }
    },

    methods:{
      changeTab:function(index){
        this.swiper.slideTo(index);
      }
    },

    mounted: function () {
      fetch('/api/list').then(response => response.json())
      .then(res => {

        var that = this;
        that.list = res;
        that.swiper = new Swiper('#index-swiper', {
          loop: false,
          onSlideChangeStart: function(swiper){
            that.navIndex = swiper.activeIndex;
          }
        });

        common.isAllLoaded('#index-scroll ul', function () {
          common.scroll(that);
        })
      })
      .catch(e => console.log("Oops, error", e));
    }
  	// mounted:function(){
    //   fetch('/api/list').then(function(response) {
    //     return response.json();
    //   }).then(function(res) {
    //       var that = this;
    //       // console.log(list);
    //       console.log(that.list);
    // 			that.list = res;
    //       console.log(that.list);
    // 			that.swiper = new Swiper('#index-swiper',{
    // 				loop:false,
    // 				onSlideChangeStart: function(swiper){
    // 					that.navIndex = swiper.activeIndex;
    // 				}
    //       });
    //       // console.log(that.swiper);
    //     	common.isAllLoaded('#index-scroll ul', function () {
    // 			  common.scroll(that);
    // 			})
    //   }).catch(function(e) {
    //     console.log("Oops, error");
    //   });
  	// }

  }
</script>
