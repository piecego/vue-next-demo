<template>
  <main>
    <div id="nav">
      <router-link to="/in-tsx">InTSX</router-link> |
      <router-link to="/in-template">InTemplate</router-link>
    </div>
    <router-view />
  </main>
</template>
<style lang="less">
@import "./App.less";
</style>
