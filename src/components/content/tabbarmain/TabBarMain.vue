<template>
  <div class="TabBarMain">
    <tab-bar>
      <tab-bar-item link="/home" activeColor="red">
        <div slot="active_icon">
          <img src="~assets/img/tabbar/home.svg" alt="" />
        </div>
        <div slot="icon">
          <img src="~assets/img/tabbar/home_active.svg" alt="" />
        </div>
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category" activeColor="yellow">
        <div slot="active_icon">
          <img src="~assets/img/tabbar/category.svg" alt="" />
        </div>
        <div slot="icon">
          <img src="~assets/img/tabbar/category_active.svg" alt="" />
        </div>
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/shopcart">
        <div slot="active_icon">
          <img src="~assets/img/tabbar/shopcart.svg" alt="" />
        </div>
        <div slot="icon">
          <img src="~assets/img/tabbar/shopcart_active.svg" alt="" />
        </div>
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <div slot="active_icon">
          <img src="~assets/img/tabbar/profile.svg" alt="" />
        </div>
        <div slot="icon">
          <img src="~assets/img/tabbar/profile_active.svg" alt="" />
        </div>
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";

export default {
  name: "TabBarMain",
  components: { TabBar, TabBarItem },
};
</script>

<style scoped>
.TabBarMain {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 12px;
  background:#fff;
  box-shadow: 0 -1px 1px #ddd;
}
img {
  width: 23px;
  margin-top: 7px;
  font-size: 0;
  vertical-align: top;
  margin-bottom: 4px;
}
</style>