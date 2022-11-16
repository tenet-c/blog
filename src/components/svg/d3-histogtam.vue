<template>

<div class="dram">  </div>

</template>

<script>
import * as d3 from 'd3'
export default {
  name: 'd3Histogtam',
  props: {
    msg: String
  },
  mounted(){
    const data = [4,12,52,42,74,35]
    const enter =  d3.select('.dram')
      .append('svg')
      .attr('width','500')
      .attr('height','500')
      .selectAll('g')
      .data(data)
      .enter()

    enter.append('rect')
      .attr('x',(data,index) => {
        return index * 50
      })
      .attr('y',(d) => d*5) 
      .attr('width','40')
      .attr('height',(d) => {
        return 400 - d*5
      })
      .style('fill','tomato')

    enter.append('text')
      .text( (d)=> d )
      .attr('x',(data,index) => {
        return index * 50 + 20
      })
      .attr('y',(d) => d*5 - 10)
      .attr('text-anchor','middle')
      

  }
}
</script>

<style lang="scss" scoped> </style>