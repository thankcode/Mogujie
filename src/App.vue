<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar-main></tab-bar-main>
  </div>
</template>

<script>
import TabBarMain from "components/content/tabbarmain/TabBarMain.vue";

export default {
  name: "App",
  components: {
    TabBarMain,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
