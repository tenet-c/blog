<template>
  <div> 
    <svg width="500" height="500">
      <circle 
        cx="250"
        cy="250"
        r = '100'  
        style="
          fill:tomato
        "
      ></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'drawCircle',
  props: {
  msg: String
  }
}
</script>

<style lang="scss" scoped> </style>