<template>
  <div> 
    <svg width="500" height="500">
      <polygon
        points="100,100 200,100,250,150,350,400,100,400" 
        style="
          fill:tomato
        "
      ></polygon>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'drawPolygon',
  props: {
  msg: String
  }
}
</script>

<style lang="scss" scoped> </style>