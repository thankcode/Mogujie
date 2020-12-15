<template>
  <div class="tab_control">
    <div v-for="(item, index) in control" :key="item" @click="activeItem(index)"  class="tab_control_item">
      <span  :class="{ actvie: index === activeId }"
        >{{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    control: {
      typr: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      activeId: 0,
    };
  },
  methods: {
    activeItem(id) {
      this.activeId = id;
      this.$emit('tabClick', id)
    },
  },
};
</script>


<style scoped>
.tab_control {
  display: flex;
  background: #fff;
  padding-bottom: 5px;
}
.tab_control .tab_control_item {
  flex: 1;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
}
.tab_control .tab_control_item .actvie {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>