<template>
  <div> 
    <svg width="500" height="500">
      <rect 
        rx="20"
        ry="20"
        x="100" 
        y="100" 
        width="200" 
        height="200" 
        style="
          fill:burlywood;
          stroke:pink;
          stroke-width: 4;
        "></rect>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'drawRadiusRect',
  props: {
  msg: String
  }
}
</script>

<style lang="scss" scoped> </style>