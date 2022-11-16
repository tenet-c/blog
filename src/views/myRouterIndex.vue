<template>
  <div class="index"> 
    <div class="list">
      <div class="button-box" v-for="text in curGallery" :key="text">
        <button class="button"  @click="selectCompontent(text)"> {{text}} </button>
      </div>
    </div>
    <div class="main">
      <Viewer :plugins="BytemdPlugin" class="viewer" :tabindex="2" :value="value"></Viewer>
      <component @getValue="getValue" class="component" :is="curCompontent"></component>
    </div>
  </div>
  
  </template>
  
  <script>
  let res_components = {};
    const files = require.context('@/components/myRouter/', true, /\.vue$/);
    let curGallery = files.keys().map(item => {
    const name = item.replace(/(\.\/|\.vue)/g, '')
      res_components[name] = files(item).default
      return name
    })
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
        value:''
        // '## 描述 \n' +
        // '计算字符串最后一个单词的长度，单词以空格隔开，字符串长度小于5000。（注：字符串末尾不以空格为结尾） \n' +
        // '#### 输入描述：\n'+
        // '输入一行，代表要计算的字符串，非空，长度小于5000。 \n'+
        // '#### 输出描述：\n' +
        // '输出一个整数，表示输入字符串最后一个单词的长度。 \n'+
        // '## 示例1 \n' +
        // `\`\`\`js
        //   const a = 123
        //   输入：
        //     hello nowcoder
        //   输出：
        //     8
        //   说明：
        //     最后一个单词为nowcoder，长度为8`
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
      getValue(value){
        this.value = value
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