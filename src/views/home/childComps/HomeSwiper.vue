<template>
  <div class="Home_Swper">
    <div class="home_swiper">
      <swiper>
        <swiper-item v-for="item in banner" :key="item.acm">
          <a :href="item.link">
            <img :src="item.image" />
          </a>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
</style>