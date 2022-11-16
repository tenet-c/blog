<template>

<div> 
  <p  >clickDrawPoint 点击绘画 </p>
  <canvas ref="canvas" width="600" height="400" @click="draw"></canvas>
</div>

</template>

<script>
import { initShaders } from './utils/webGL_utils';
export default {
  name: 'clickDrawPoint',
  data(){
    return{
      gl:{},
      a_Position:{},
      a_PointSize:{},
      u_FragColor:{},
      color:1.0,
      gl_points:[] // 点位数组
    }
  },
  mounted(){
    this.gl = this.$refs['canvas'].getContext('webgl');
    const vShader_source = `
      attribute vec4 a_Position;
      attribute float a_PointSize;
      void main(){
        gl_Position = a_Position;
        gl_PointSize = a_PointSize;
      }
    `
    const fShader_source = `
      precision mediump float;
      uniform vec4 u_FragColor;
      void main(){
        gl_FragColor = u_FragColor;
      }
    `
    initShaders(this.gl, vShader_source, fShader_source)
    this.a_Position = this.gl.getAttribLocation(this.gl.program,'a_Position');
    this.a_PointSize = this.gl.getAttribLocation(this.gl.program,'a_PointSize');
    this.u_FragColor = this.gl.getUniformLocation(this.gl.program,'u_FragColor');
    this.gl.vertexAttrib3f(this.a_Position,0.0,0.0,0.0);
    this.gl.vertexAttrib1f(this.a_PointSize,2.0)
    this.gl.clearColor(0,0,0,1)
    this.gl.clear(this.gl.COLOR_BUFFER_BIT)
    this.gl.drawArrays(this.gl.POINTS,0,1)
  },
  methods:{
    draw(e){
      let x = e.clientX
      let y = e.clientY
      const rect = e.target.getBoundingClientRect()
      x = ((x-rect.left) - this.gl.canvas.width/2) / (this.gl.canvas.width/2)
      y = (this.gl.canvas.height/2 - (y-rect.top)) / (this.gl.canvas.height/2)
      
      this.gl_points.push({x,y})
      this.gl.clear(this.gl.COLOR_BUFFER_BIT)
      this.gl_points.forEach((item) => {
        this.gl.vertexAttrib3f(this.a_Position,item.x,item.y,0.0)
        if(this.color >= 255){
          this.color = 1.0
        }else{
          this.color = this.color + 1.0
        }
        this.gl.uniform4f(this.u_FragColor,this.color,0.0,0.0,1.0)
        this.gl.drawArrays(this.gl.POINTS,0,1)
      })
    }
  }
}
</script>

<style lang="scss" scoped> </style>