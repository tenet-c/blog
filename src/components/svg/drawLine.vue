<template>
  <div> 
    <svg width="500" height="500">
      <line
        x1="50"
        x2="450"
        y1 = '250'  
        y2 = '250' 
        style="
          stroke: tomato;
          stroke-width: 4;
        "
      ></line>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'drawLine',
  props: {
  msg: String
  }
}
</script>

<style lang="scss" scoped> </style>