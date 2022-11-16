<template>

<div>
  <p>
    multiPoint 多点一起画(三角形) 113
  </p>
  <canvas ref="canvas" width="400" height="400"></canvas>
</div>

</template>

<script>
import { initShaders } from './utils/webGL_utils'
export default {
  name: 'multiPoint',
  data(){
    return{
      gl:{},
      a_Position:{}
    }
  },
  mounted(){
    this.gl = this.$refs['canvas'].getContext('webgl')
    const vShader_source = `
      attribute vec4 a_Position;
      void main(){
        gl_Position = a_Position;
        gl_PointSize = 10.0;
      }
    `
    const fShader_source = `
      void main(){
        gl_FragColor = vec4(1.0,1.0,0.0,1.0);
      }
    `
    initShaders(this.gl, vShader_source, fShader_source)
    const n = this.initVertexBuffer(this.gl)
    this.gl.clearColor(0,0,0,1)
    this.gl.clear(this.gl.COLOR_BUFFER_BIT)
    this.gl.drawArrays(this.gl.POINTS,0,n)
  },
  methods:{
    initVertexBuffer(gl){
      const vertice = new Float32Array([
        0.0, 0.5, 0.5, -0.5, -0.5, -0.5
      ])
       const n = 3
      // // 1.创建缓冲区对象
      const vertexBuffer = gl.createBuffer();

      // // 2.绑定缓存区对象
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)      

      // 3.向缓冲区对象写入数据
      gl.bufferData(gl.ARRAY_BUFFER,vertice,gl.STATIC_DRAW)
      this.a_Position = gl.getAttribLocation(gl.program, 'a_Position');
       // 4.将缓冲区变量分配给定点着色器
      gl.vertexAttribPointer(this.a_Position, 2, gl.FLOAT, false, 0, 0)
      // 5.连接定点着色器与缓冲区对象
      gl.enableVertexAttribArray(this.a_Position)
      return n
    }
  }
}
</script>

<style lang="scss" scoped> </style>