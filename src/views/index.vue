<template>
<div class="navButton"> 
  <div @click="go(item.path)" class="nav-item-button"  v-for="item in routeList" :key="item.path">
    {{item.meta? item.meta.title : ''}}
  </div>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      routeList:[]
    }
  },
  created(){
    this.routeList = this.$router.options.routes
  },
  methods:{
    go(route){
      this.$router.push(route)
    }
  }
}
</script>

<style lang="scss" scoped>
  .navButton{
    display: flex;
    .nav-item-button{
      margin-left: 8px;
      border: 1px solid red;
      width: max-content;
      cursor: pointer;
    }
  }
</style>