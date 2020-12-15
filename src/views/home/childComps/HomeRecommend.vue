<template>
  <div class="home_recommend">
    <div v-for="item in recommend" :key="item.acm" class="recommend_item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>


<style scoped>
.home_recommend {
  padding: 10px 0 25px;
  display: flex;
  border-bottom: 10px solid #eee;
}
.home_recommend .recommend_item {
  text-align: center;
  flex: 1;
}
.home_recommend .recommend_item a {
  display: block;
  font-size: 14px;
}
.home_recommend .recommend_item img {
  height: 65px;
  margin-bottom: 5px;
}
</style>