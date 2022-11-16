<template>
  <div> 
    <svg class="draw"></svg>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'd3Init',
  props: {
    msg: String
  },
  mounted(){
    const data = [2123,142,2435,1634,63]
    d3.select('.draw')
      .attr('width','500')
      .attr('height','500')
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x','100')
      .attr('y',(d,index) => {
        return index*20
      })
      .text((d) => {
        return d
      })
  }
}
</script>

<style lang="scss" scoped> </style>