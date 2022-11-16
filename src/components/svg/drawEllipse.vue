<template>
  <div> 
    <svg width="500" height="500">
      <ellipse 
        cx="250"
        cy="250"
        rx = '150'  
        ry = '100' 
        style="
          fill:tomato
        "
      ></ellipse>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'drawEllipse',
  props: {
  msg: String
  }
}
</script>

<style lang="scss" scoped> </style>