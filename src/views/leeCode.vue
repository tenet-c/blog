<template>

<div class="index"> 
  <div class="list">
    <div class="button-box" v-for="text in curGallery" :key="text">
      <button class="button"  @click="selectCompontent(text)"> {{text}} </button>
    </div>
  </div>
  <div class="main">
    <Viewer :plugins="BytemdPlugin" class="viewer" :tabindex="2" :value="value"></Viewer>
    <component class="component" :is="curCompontent"></component>
  </div>
</div>

</template>

<script>
import { HJ } from '../components/leeCode';
console.log(HJ)
let res_components = {};
  const files = require.context('@/components/leeCode/', true, /\.vue$/);
  let curGallery = files.keys().map(item => {
  const name = item.replace(/(\.\/|\.vue)/g, '')
    res_components[name] = files(item).default
    return name
  })

  console.log()
import highlight from '@bytemd/plugin-highlight-ssr';
import "highlight.js/styles/vs.css";
import { Viewer } from '@bytemd/vue'
import 'bytemd/dist/index.css'

const plugins = [highlight()];
export default {
  name: 'leeCode',
  components:{
    Viewer,
    ...res_components
  },
  data(){
    return{
      BytemdPlugin:plugins,
      curGallery:curGallery,
      curCompontent:'',
      value: ''
      
    }
  },
  created(){
    const plugins = [highlight()];
    this.BytemdPlugin = plugins;
  },
  methods:{
    selectCompontent(key){
      this.curCompontent = key
      //curCompontent
    },
    setValue(val){
      this.value = val
    }
  }

}
</script>

<style lang="scss" scoped>

.index{
  display: flex; 
}
.list{
  width: 150px;
  height: 100%;
  .button-box{
    .button{
      width: 100%;
      
      cursor: pointer;
      margin-top: 8px;
    }
  }
}
.main{
  padding: 12px;
  width: calc(100% - 150px);
}
.component{
  margin-left: 20px;
}

.viewer{ 
  ::v-deep p{
    padding-left:2rem;
  }
  ::v-deep pre{
    font-size: 14px;
    background-color: #ebeef1;
  }
}

</style>