<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

html{
  box-sizing: border-box;
  padding: 8px 8px;
  height: 100vh;
  width: 100%;
  background: white;
  
}
body{
  padding:0;
  margin: 0;
}
p {
    display: block;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
h1,h2,h3,h4,h5 {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
}
</style>
