<template>
  <div> 
    <svg width="500" height="500">
      <text 
        x="100"
        y="250"
        style="
          fill:tomato;
          font-size: 20;
        "
        textLength='200'
      > 测试文字 </text >
    </svg>
  </div>
</template>

<script>
export default {
  name: 'drawText',
  props: {
  msg: String
  }
}
</script>

<style lang="scss" scoped> </style>