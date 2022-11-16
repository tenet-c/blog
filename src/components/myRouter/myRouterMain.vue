<template>
<div> main </div>
</template>

<script>
const value = `this i valueMain`
export default {   
  name: 'myRouterMain',
  props: {
    msg: String
  },
  created(){
    this.$emit('getValue',value)
  }
}
</script>

<style lang="scss" scoped> </style>