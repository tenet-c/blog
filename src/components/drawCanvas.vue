<template>

<div> 
  <component :is="key" v-for="key in curGallery" :key="key"></component>
</div>

</template>

<script>
  let res_components = {};
  const files = require.context('@/components/canvas/', true, /\.vue$/);
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
    }
  },
  components: res_components,
  created(){
    
  }
}
</script>

<style lang="scss" scoped> </style>