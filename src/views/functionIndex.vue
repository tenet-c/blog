<template>

<div> 
  <div class="a" v-for="item1 in 5" :key="item1">
    <button @click="buttonC(item1,indexaaaaa)"> a </button>
  </div> 
  
  <div v-show="flag[indexaaaaa].flag" class="demoB"> 显示 </div>
</div>

</template>

<script>
export default {
  data(){
    return{
      flag:[{
        index:1,
        flag:false
      },{
        index:2,
        flag:false
      },{
        index:3,
        flag:false
      },{
        index:4,
        flag:false
      },{
        index:5,
        flag:false
      }],
      indexaaaaa:0
    }
  },
  props: {
    msg: String
  },
  methods:{
    buttonC(index){
      this.flag.forEach((item2,index1) => {
        // eslint-disable-next-line no-debugger
        debugger
        if(item2.index == index){
          this.flag[index1].flag = !this.flag[index1].flag
        }
      })
    }
  }
}
</script>
  
<style lang="scss" scoped> 
  .a{
    width: 100px;
    display: flex;
  }
  .demoB{
    height: 100px;
    width: 100px;
  }
</style>