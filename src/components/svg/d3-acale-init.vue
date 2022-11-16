<template>
<div>
  <p>线性比例尺</p>
  <svg class="draw"> 
  </svg>
</div>


</template>

<script>
import * as d3 from 'd3'
export default {
  name: 'd3Histogtam',
  props: {
    msg: String
  },
  mounted(){
    const data = [10,12,52,42,74,35,300]
    /**
     * x y
     * x 定义域
     * y 值域
     */
    const linear = d3.scaleLinear()
      .domain([d3.min(data),d3.max(data)])
      .range([1,400])

    const enter =  d3.select('.draw')
      .attr('width','800')
      .attr('height','500')
      .selectAll('g')
      .data(data)
      .enter()

    enter.append('rect')
      .attr('x',(d,index) => index * 50)
      .attr('y',(d) => 500 - linear(d))
      .attr('width',40)
      .attr('height',d => linear(d))
      .style('fill','tomato')
    
    enter.append('text')
    .attr('x',(d,index) => index * 50)
    .attr('y',(d) => 500 - linear(d) - 10)
    .text(d => d)
    .attr('text-anchor','middle')
    .attr('transform','translate(20)')
  }
}
</script>

<style lang="scss" scoped> </style>