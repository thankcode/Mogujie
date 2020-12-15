<template>
  <div class="home">
    <div class="home_nav">
      <nav-bar>
        <div slot="center">蘑菇街</div>
      </nav-bar>
    </div>
    <tab-control
      class="home_control"
      :control="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabcontrol1"
      v-show="isFixedTabControl"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :pullUpLoad="true"
      :probeType="3"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-feature></home-feature>
      <tab-control
        :control="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabcontrol2"
      ></tab-control>
      <good-list :goods="goods[currentType]"></good-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTopTag"></back-top>
  </div>
</template>

<script>
import { getHomeMultiData, getHomeGoods } from "network/home";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodList from "components/content/goods/GoodList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backtop/BackTop.vue";

import HomeSwiper from "views/home/childComps/HomeSwiper";
import HomeRecommend from "views/home/childComps/HomeRecommend";
import HomeFeature from "views/home/childComps/HomeFeature";

import { debounce } from "common/utils/index";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      actvieControlId: 0,
      isShowBackTopTag: false,
      isFixedTabControl: false,
    };
  },
  created() {
    // 获取首页基本数据
    this.getHomeMultiData();

    //获取首页商品
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll?.refresh, 100);
    this.itemImageLoad(refresh);
  },
  methods: {
    // 图片加载完毕
    itemImageLoad(fn) {
      this.$bus.$on("itemImageLoad", () => {
        fn();
      });
    },
    //底部监听
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    //滚动监听
    contentScroll(position) {
      this.isShowBackTopTag = -position.y > 1000;
      this.isFixedTabControl =
        -position.y > this.$refs.tabcontrol2.$el.offsetTop;
    },
    // 返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    tabClick(id) {
      this.actvieControlId = id;
      this.$refs.tabcontrol1.activeId = id;
      this.$refs.tabcontrol2.activeId = id;
    },
    // 网络请求相关
    async getHomeMultiData() {
      const { data, success } = await getHomeMultiData();
      if (!success) return;
      this.banner = data.banner.list;
      this.recommend = data.recommend.list;
    },
    async getHomeGoods(type) {
      const page = (this.goods[type].page += 1);
      const { data, success } = await getHomeGoods(type, page);
      if (!success) return;
      this.goods[type].list.push(...data.list);
    },
  },
  computed: {
    currentType() {
      return Object.keys(this.goods)[this.actvieControlId];
    },
  },
};
</script>

<style scoped>
.home {
  /* padding-top: 44px; */
  height: 100vh;
}
.home_nav {
  background: var(--color-tint);
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.home_control {
  position: relative;
  z-index: 2;
}
</style>