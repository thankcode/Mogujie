<template>
  <div class="TabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
.TabBar{
  display: flex;
}
</style>