<template>
  <div class="good_item">
    <div class="img">
      <img :src="goodsItem.show.img" alt="" @load="imageLoadFinish" />
    </div>
    <div class="good_info">
      <div class="introduce">
        <p>{{ goodsItem.title }}</p>
      </div>
      <div class="price">
        <span class="newPrice">{{ goodsItem.price }}</span>
        <span class="orgPrice">{{ goodsItem.orgPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodItem",
  props: {
    goodsItem: {
      type: Object,
      deault() {
        return {};
      },
    },
  },
  methods: {
    imageLoadFinish() {
      this.$bus.$emit("itemImageLoad");
    },
  },
};
</script>

<style scoped>
.good_item {
  width: 50%;
  font-size: 12px;
  margin-top: 5px;
}
.good_item:nth-child(odd) {
  padding: 0 5px;
}
.good_item:nth-child(even) {
  padding-right: 5px;
}
.good_item .img img {
  width: 100%;
  height: 262.5px;
  border-radius: 3px;
}
.good_item .introduce p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 3px 0;
}
.good_item .price {
  text-align: center;
}
.good_item .price .newPrice {
  margin-right: 3px;
}
.newPrice {
  color: var(--color-tint);
}
</style>

