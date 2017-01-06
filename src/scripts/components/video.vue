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
      <ul>
        <li>
          <p>sososossos</p>
          <img src="/images/video/video1.png" alt="">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  module.exports = {
    data:function(){
      return{
        videoIndex:0,
        title:['推荐','娱乐','搞笑','热点']
      }
    }
  }


</script>
