<template>

<div>
  <p>2.point1</p>
  <canvas ref="canvas" width="400" height="400"></canvas>
</div>

</template>

<script>
import {initShaders} from './utils/webGL_utils'
const VSHADER_SOURCE =
  `void main(){
    gl_Position = vec4(0.5,0.0,0.0,1.0); // 定位作用 Position位置
    gl_PointSize = 10.0; // 点的大小 point 点
  }`
const FSHADER_SOURCE = `
  void main(){
    gl_FragColor = vec4(1.0,1.0,0.0,1); // 点的颜色 Frag 问题 杀伤
  }
`
export default {
  name: 'drawPoint1',
  mounted(){
    
    const gl = this.$refs['canvas'].getContext('webgl')
    // 初始化着色器
    // eslint-disable-next-line no-undef
    initShaders(gl, VSHADER_SOURCE,FSHADER_SOURCE)

    gl.clearColor(0,0,0,1)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.POINTS,0,1)
  }
}
</script>

<style lang="scss" scoped> </style>