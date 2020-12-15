<template>
    <div class="NavBar">
        <div class="left"><slot name="left"></slot> </div>
        <div class="center"><slot name="center"></slot> </div>
        <div class="right"><slot class="right"></slot> </div>
    </div>
</template>


<script>
export default {
    name:'NavBar'    
}
</script>


<style scoped>
.NavBar{
    height: 44px;
    line-height: 44px;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.8);
    text-align: center;
    display: flex;
    color: #fff;
}
.left,.right{
    width: 60px;
}
.center{
    flex: 1;
}
</style>