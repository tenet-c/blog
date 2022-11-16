<template>
  <div> 
    <div class="draw"></div>
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
      .style('color','red')
      .selectAll('p')
      .data(data)
      .enter()
      .append('p')
      .text((d) => {
        return d
      })
  }
}
</script>

<style lang="scss" scoped> </style>