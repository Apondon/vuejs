<template>
  <div class="search">
    <header>
      <div class="searchBox">
        <div class="searchText">
          <span class="yo-ico">&#xe677;</span>
          <input type="text" placeholder="搜索">
        </div>
      </div>
      <span class="goback">
        <router-link v-bind:to="'/'">
            取消
        </router-link>
      </span>
    </header>
  </div>
</template>
