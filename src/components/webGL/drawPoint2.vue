<template>
<div> 
  <p>drawPoint2</p>
  <canvas ref="canvas" width="400" height="400"></canvas>
</div>
</template>

<script>
import { initShaders } from './utils/webGL_utils'
export default {
  name: 'drawPoint2',
  mounted(){
    const gl = this.$refs['canvas'].getContext('webgl')
    // shader 着色器 source来源  
    const vShader_source = `
      attribute vec4 a_Position; //attribute 属性
      void main(){
        gl_Position = a_Position;
        gl_PointSize = 10.0;
      }
    `
    const fShader_source = `
      void main(){
        gl_FragColor = vec4(1.0,0.0,0.0,1.0);
      }
    `
    initShaders(gl,vShader_source,fShader_source)
    // 获取attrbute 变量
    const a_Position = gl.getAttribLocation(gl.program, 'a_Position')
    // 将定点位置传给aPostiong 变量
    gl.vertexAttrib3f(a_Position,0.0,0.0,0.0)
    gl.clearColor(0,0,0,1)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.POINTS,0,1)
  }
}
</script>

<style lang="scss" scoped> </style>