<template>

<div> 
  <p>clearWebGL </p>
  <canvas ref="canvas" width="400" height="400"></canvas>  
</div>

</template>

<script>
export default {
  name: 'clearWebGL',
  mounted(){
    const gl = this.$refs['canvas'].getContext('webgl')
    gl.clearColor(0,0,0,1) // 设置了清除颜色
    gl.clear(gl.COLOR_BUFFER_BIT) // 引入了常量
  }

}
</script>

<style lang="scss" scoped> </style>