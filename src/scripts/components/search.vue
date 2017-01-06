<template>
  <div class="search">
    <header>
      <div>
        <span></span>
        <input type="text" placeholder="搜索">
      </div>
      <span class="goback">
        <router-link v-bind:to="'/'">
            取消
        </router-link>
      </span>
    </header>
  </div>
</template>
