import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const routes = [{
  path: '/', 
  redirect: "/index"
},{
  path:'/index',
  name:"Index",
  component:()=>import('../views/index.vue'),
  meta:{
    title:'首页'
  }
},{
  path:'/mdIndex',
  name:"mdIndex",
  component:()=>import('../views/mdIndex.vue'),
  meta:{
    title:'测试md首页'
  }
},{
  path:'/canvasList',
  name:"canvasList",
  component:()=>import('../views/canvasList.vue'),
  meta:{
    title:'canvas列表'
  }
},{
  path:'/webGLList',
  name:"webGLList",
  component:()=>import('../views/webGLList.vue'),
  meta:{
    title:'webGL列表'
  }
},{
  path:'/svg',
  name:"svg",
  component:()=>import('../views/svgIndex.vue'),
  meta:{
    title:'svg列表'
  }
},{
  path:'/leeCode',
  name:"leeCode",
  component:()=>import('../views/leeCode.vue'),
  meta:{
    title:'leeCode'
  }
},{
  path:'/myRouter',
  namr:'myRouter',
  component:()=> import('../views/myRouterIndex.vue'),
  meta:{
    title:'手写vueRouter源码'
  }
},{
  path:'/function',
  name:'function',
  component:()=>import('../views/functionIndex.vue'),
  meta:{
    title:'函数式编程'
  }
}]

const router = new VueRouter({
  mode: 'history',  
  base:'/webGl',
  routes
}) 

export default router