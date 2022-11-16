<template>

<div class="body">
  <div class="nth-box">
    <p v-for="key in curGallery" :key="key" @click="selectCompontent(key)"> {{key}} </p>
  </div>
  <component class="component" :is="curCompontent"></component>
</div>

</template>

<script>
  let res_components = {};
  const files = require.context('@/components/webGL/', true, /\.vue$/);
    let curGallery = files.keys().map(item => {
    const name = item.replace(/(\.\/|\.vue)/g, '')
    res_components[name] = files(item).default
    return name
  })

export default {
  name: 'drawCanvas',
  data(){
    return{
      curGallery:curGallery,
      curCompontent:''
    }
  },
  components: res_components,
  created(){
    
  },
  methods:{
    selectCompontent(key){
      this.curCompontent = key
      //curCompontent
    }
  }
}
</script>

<style lang="scss" scoped>
.body{
  display: flex;
}
.nth-box{
  width: 200px;
  &:hover{
    cursor: pointer;
  }
}
.component{
  margin: auto;
}
</style>