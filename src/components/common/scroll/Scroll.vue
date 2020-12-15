<template>
  <div ref="scr">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.registerScroll();
    this.onScroll();
    this.pulldow();
  },
  methods: {
    registerScroll() {
      this.scroll = new BScroll(this.$refs.scr, {
        observeDOM: true,
        mouseWheel: true,
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      });
    },
    scrollTo(x, y, time = 1000) {
      this.scroll.scrollTo(x, y, time);
    },
    onScroll() {
      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on("scroll", (position) => {
        //console.log(position);
        this.$emit("scroll", position);
      });
      }
    },
    pulldow() {
      if(this.pullUpLoad){
        this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
        this.scroll.finishPullUp();
      });
      }
    },
    refresh() {
      this.scroll.refresh();
    },
  },
};
</script>


<style scoped>
</style>