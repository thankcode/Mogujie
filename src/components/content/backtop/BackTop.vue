<template>
  <div class="back_top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>


<script>
export default {
  name: "BackTop",
};
</script>


<style scoped>
.back_top {
  position: fixed;
  right: 10px;
  bottom: 50px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.back_top img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
</style>