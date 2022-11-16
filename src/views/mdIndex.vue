<template>

<div> 
  <Editor :plugins="plugins" mode="split"  class="editos" :value="value" @change='handleChange'/>
  <Viewer  v-show="showViewer" class="viewer" :tabindex="2" :value="value"></Viewer>
</div>

</template>

<script>
import highlight from '@bytemd/plugin-highlight-ssr';
import "highlight.js/styles/vs.css";
import { Editor,Viewer } from '@bytemd/vue'
import 'bytemd/dist/index.css'
const plugins = [highlight()];
export default {
  name: 'HelloWorld',
  components:{
    Editor,
    Viewer
  },
  data(){
    return{
      plugins:plugins,
      value:'',
      showViewer:false
    }
  },
  methods:{
    handleChange(v){
      this.value = v
      console.log(this.value)
    }
  },
  watch:{
    value(){
      console.log(this.value)
    }
  }
}
</script>

<style lang="scss" scoped> 
.editos{
  text-align: left;
}
</style>