<template>

<div> 
  <p>1.drawRect</p>
  <canvas ref="canvas" width="500" height="500">
  </canvas> 
</div>

</template>

<script>
export default {
  name: 'drawRect',
  created(){
    
  },
  mounted(){
    const ctx = this.$refs['canvas'].getContext('2d')
    ctx.fillStyle = 'rgba(0,0,0,1)'  // 填充颜色
    ctx.fillRect(120,10,150,150) // 绘画位置
  }
}
</script>

<style lang="scss" scoped> 

</style>