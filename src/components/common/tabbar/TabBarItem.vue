<template>
  <div class="TabBarItem" @click="clickItem">
    <div v-if="!activeItem">
      <slot name="active_icon"></slot>
    </div>
    <div v-else>
      <slot name="icon"></slot>
    </div>
    <!-- <div :class="{active_color:activeItem}">
      <slot name="text"></slot>
    </div> -->
    <div :style="{color:activeItem?activeColor:''}">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    link:{
      type:String,
      default:"/home"
    },
    activeColor:{
      type:String,
      default:'pink'
    }
  },
  data(){
    return {
      isActive:true,
    }
  },
  methods:{
    clickItem(){
      this.$router.push(this.link)
    }
  },
  computed:{
    activeItem(){
      return this.$route.path === this.link
    },

  }
};
</script>

<style scoped>
.TabBarItem {
  height: 49px;
  flex: 1;
  text-align: center;
}
.active_color{
  color: pink;
}
</style>