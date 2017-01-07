<template id="">
  <div class="user">
    <header>
      <p>user</p>
    </header>
    <section>
      <div></div>
      <ul>
        <li v-for="item in userNav">
          <i>{{item.ico}}</i>
          <b>{{item.title}}</b>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      userNav: [
        {
          ico: '&#xe608;',
          title: '活动1'
        },
        {
          ico: '&#xe60d;',
          title: '活动2'
        },
        {
          ico: '&#xe648;',
          title: '活动3'
        },
        {
          ico: '&#xe648;',
          title: '活动4'
        },
        {
          ico: '&#xe648;',
          title: '活动5'
        },
        {
          ico: '&#xe648;',
          title: '活动6'
        }
      ]
    }
  }
}
</script>
