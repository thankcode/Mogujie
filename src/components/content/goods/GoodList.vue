<template>
  <div class="good_list">
    <good-item
      v-for="(item, index) in goods.list"
      :key="index"
      :goodsItem="item"
    />
  </div>
</template>

<script>
import GoodItem from "./GoodItem.vue";

export default {
  components: { GoodItem },
  name: "GoodList",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
};
</script>



<style scoped>
.good_list {
  width: ;
  display: flex;
  flex-wrap: wrap;
}
</style>