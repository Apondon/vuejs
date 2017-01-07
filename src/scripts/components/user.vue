<template id="">
  <div class="user">
    <header>
      <p>user</p>
    </header>
    <section>
      <div>this is user</div>
      <ul>
        <li v-for="item in userNav">
          <b>应该是一些{{item}}</b>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      userNav:['活动1','活动2','活动3','活动4','活动5','活动6']
    }
  }
}
</script>
