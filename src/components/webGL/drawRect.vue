<template>

<div>
  <p>
    drawRect 画一个矩形 <button @click="draw1"> 点击换三角扇形 </button>
  </p> 
  <canvas ref="canvas" width="600" height="600"></canvas>
</div>

</template>

<script>
import { initShaders } from './utils/webGL_utils'
export default {
  name: 'drawRect',
  data(){
    return{
      gl:{}
    }
  },
  mounted(){
    this.gl = this.$refs['canvas'].getContext('webgl')
    // 定点着色器
    const vShader_source = `
      attribute vec4 a_Positions;
      void main(){
        gl_Position = a_Positions;
      }
    `
    const fShader_source = `
      void main(){
        gl_FragColor = vec4(1.0,1.0,0.0,1.0);
      }
    `
    initShaders(this.gl , vShader_source, fShader_source)
    const n =  this.initVertexBuffer(this.gl)
    this.gl.clearColor(0,0,0,1)
    this.gl.clear(this.gl.COLOR_BUFFER_BIT)
    this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,n)
  },
  methods:{
    draw1(){
      this.gl.clearColor(0,0,0,1)
      this.gl.clear(this.gl.COLOR_BUFFER_BIT)
      this.gl.drawArrays(this.gl.TRIANGLE_FAN,0,4)
    },
    initVertexBuffer(gl){
      // 先定义个定点数组
      const vertexArray = new Float32Array([
        -0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,-0.5
        
      ])
      const n = vertexArray.length / 2
      // 1.创建缓存区对象
      const createdBuffer =  gl.createBuffer()
      // 2.绑定缓存区对象
      gl.bindBuffer(gl.ARRAY_BUFFER,createdBuffer)
      // 3 赋值缓存区对象
      gl.bufferData(gl.ARRAY_BUFFER,vertexArray,gl.STATIC_DRAW)
      // 获取定点着色器
      const a_Positions = gl.getAttribLocation(gl.program,'a_Positions')
      // 4.给定点着色器赋值
      gl.vertexAttribPointer(a_Positions,2,gl.FLOAT,false,0,0)
      // 5.连接
      gl.enableVertexAttribArray(a_Positions)
      return n
    }
  }
}
</script>

<style lang="scss" scoped> </style>