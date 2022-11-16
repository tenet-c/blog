<template>

<div> app </div>

</template>

<script>
const value = `this i valueApp`
export default {
  name: 'myRouterApp',
  props: {
    msg: String
  },
  created(){
    this.$emit('getValue',value)
  }
}
</script>

<style lang="scss" scoped> </style>