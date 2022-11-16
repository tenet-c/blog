- 轻量级的web服务
- js的同构开发
- 高效的前端工程化

node js 底层 与重点模块

架构
第一层
nativues modules 用户层 js实现的 内置核心模块
第二层
builitin modules 胶水层 让node的核心模块 完成更底层的服务支持 从而更底层的操作 帮助我们调用具体的c++函数
第三层
v8 -> libuv -> 第三方模块
v8: 执行js 提供接口=>调用c++  负责构建环境和最终执行
libuv: 事件循环 事件队列 异步io
第三方模块: zlib http c-ares



## 为什么是nodejs
B/S架构
用户通过客户端 向 服务端提供请求 而 服务端提供响应数据
除了网络请求和响应网络带宽和硬件性能之外客观因素，剩下影响速度的只剩io处理了
数据的读写 终归有时间消耗的
客户端 -> 服务端(java) -> 数据库
其他高级语言实现并发的形式 一般采用多线程 或者多进程 
例：
  当有几个客人的时候 就创建几个服务员在等待客人点餐获得点餐结果
  优点: 客户体验很好
  缺点：不能无限的创建服务员 就会有无人响应的情况 
  分析：大部分的时间消耗都来自于客人点菜的时间消耗中(理解为数据库的io操作)
  衍生出 reactor模式 只保留一个服务员 当客人完成点餐后 呼叫这个服务员 单线程完成了多线程的模式 并且是非阻塞的

node相当于一个服务员 更适合处理客人点餐特别慢的场景(io密集) 不适用于点餐特别快的场景(cpu密集型)
并不适用于大量复杂的业务处理


## node异步io实现
io只有阻塞和非阻塞两种状态
异步io其实就是轮询判断是否完成
常见的轮询技术 read,select,poll,kqueue,event ports
libuv 是几种不同的轮询的抽象封装  当不同的运行环境 实现不同的轮询

node实现了 非阻塞的异步io

## node事件驱动
### 发布订阅 观察自 事件驱动
  共同的特征 发布者广播消息 监听者会收到之前订阅的消息
  代码案例event-driven.js (driven驱动)
  ```js
    // 引入node内置的event模块
      const EventsEmitter = require('events')
      const myEvent = new EventsEmitter()

    // on订阅事件 
      myEvent.on('事件1',()=>{
        // 回调函数属于监听事件
          console.log('事件1触发')
      })
    // 发布
      myEvent.emit('事件1')
  ```

  ## node单线程
  通过异步io 事件循环 -> 事件通知回调 完成了多线程的工作
  node主线程是单线程的 执行同步代码
  libuv是存在线程池的 默认存在4个线程
      网络io libuv会调用相应平台的io接口 不同的平台接口不同  其他的操作用线程池的线程
      node是可以增加默认的线程数的
  优点: 能胜任多线程工作 并且减少了cpu的开销 和 内存同步的开销
  缺点: 处理cpu密集的任务时 会过多的占用cpu 从而造成阻塞 无法利用高性能的多核cpu (node已给出多核利用相应的解决方案)
  更多的定位是做中间层 做任务分发
  
  模拟cpu密集任务的阻塞
  single-thread (single单一的 thread线程)

  ## 应用场景
  BFF层 
    - 接收客服请求
    - 格式化数据 渲染html页面
    - 合并接口请求
    - 解决跨域
    - 数据缓存
    - 没有大量业务处理代码 可直接操作数据库
    - 聊天应用
    - 更适合io密集  不适合cpu密集 不适合大量业务逻辑 不适合大量计算

  ## 简易api服务
  npm init -y
  tsc --init
  新建 api_server.ts
  npm install ts-node -D
  npm i express
  npm i @types/express -D
  tsconfig:
    "resolveJsonModule": true,  使json文件能够import
  详情 server1

  ## node全局对象global
  #### 常见全局变量   
  - __filename: 当前正执行脚本的绝对路径
  - __dirname: 当前正执行脚本的相对路径
  - timer类函数: 定时器 计时器 等 
  - process: 提供当前进程的互动
  - require: 导入
  - module express 导出
  ps: 示例 node-global
  #### 全局变量 process
  - 1.获取进程信息
    - 资源cpu cpuUsage() 内存 memoryUsage()
    
  - 2.当前进程进行操作 创建子进程等等
  ps: 示例process.js

  ## 核心模块 path 用来处理文件或者目录的路径
  - basename() 获取路径中的基础名称
  - dirname() 获取路径中的目录名称
  - extname()  获取路径中的拓展名称
  - isAbsolute() 获取路径是否为绝对路径
  - join() 拼接路径
  - resolve() 返回绝对路径
  - pasre() 解析路径
  - format() 序列化路径
  - normalize() 规范化路径
  ps node-path.js

  ## 核心Buffer 缓冲区可以同构Buffer 让js操作二进制数据
  - 二进制数据
  - 流数据
    流可以理解为是一种数据类型,它可以分段,配合管道技术将数据一段一段将大数据传输
  - Buffer

  ### 创建Buffer
  - alloc: 创建指定字节大小的Buffer
  - allocUnsafr: 创建指定大小的Buffer 不安全
  - from: 接收数据创建Buffer
  ps node-buffer.js 文件

  ### Buffer实例方法
  - fill:数据填充
  - write:向buffer中写入
  - toString 从buffer中提取
  - slice: buffer的截取
  - indexOf: 在buffer中查找数据
  - copy: 复制buffer


  ### Buffer静态方法
  - concat: 将多个buffer进行拼接
  - isBuffer: 判断是否为Buffer

  ## FS
  ### 基本操作 
  - 权限位
  - 操作符
  - 标识符
  #### 权限位分 创建者 亲友组 访客三类
  - 一般linux rw-r--r-- 翻译:创建可读写不能执行 亲友访客 可读不可写 不可执行
  - 一般windos rw-rw-rw-
  

  #### 常见flag操作符
  - r 表示可读
  - w 表示可写
  - s 表示同步
  - + 表示执行相反操作
  - x 表示排它操作
  - a 表示追加操作
  #### fd文件标识符

  ### 文件操作api
  - 读写
  - 拷贝
  - 监控
  ps:任何操作 都有同步和异步两类操作
  #### readFile: 从指定文件读取数据
  #### writeFile: 将数据写入指定文件
  #### appendFile: 追加的方式写入数据
  #### copyFile: 将某个文件数据拷贝至另一个文件
  #### watchFile: 对指定文件进行监控

  ## 案例 md转html
  ps:md-to-html

  ## 文件的打开和关闭
  ps:node-open-close.js

  ## 大文件的读写(综合应用)
  #### 思路
  用中间暂存区 buffer 一点点的读取和写入 不必一次性使用内存
  ps: node-bigFile-read-write.js

  ## 大文件的拷贝(应用)
  ps: node-bigFile-copy.js

  ## 目录操作
  - access:判断文件或目录是否有操作权限
  - stat: 获取目录及文件信息
  - mkdir: 创建目录
  - rmdir: 删除目录
  - readdir: 读取目录
  - unlink: 删除指定文件
  ps: node-fs-dir.js

  # 模块化历程
  commonjs规范 是同步加载的 不适用于浏览器
  ES module 规范

  ## commonjs规范
  - 模块的引用 require
  - 模块的定义 
  - 模块的标识 

  ## node与commonjs
  - 任何单一文件就是一个模块 有单独的作用域 可以直接使用module属性
  - 使用require导入
  - 将模块id传入require实现模块的定位
  - console.log(module)
  - id: 模块标识符 一般是绝对路径
  - filename: 返回文件的绝对路径
  - loaded: 表示当前模块是否完成加载
  - parent: 返回对象存放当前调用的模块
  - childrem: 返回数组，存放当前模块调用其他模块
  - exports: 返回当前模块需要暴露的内容
  - paths: 返回数组存放不同目录下的node_modules位置

  ### module.exports 和 exports区别
  exports是node为了方便提供的变量 指向的是module.exports地址 
  不能直接给exports重新赋值

  ### require属性
  - 基本功能就是读取并执行一个模块文件
  - resolve: 返回绝对路径
  - extensions: 依据不同的后缀名进行解析
  - main: 返回主模块对象
  ps:module

  # 模块分类
  ### 内置模块
  - node源码编译的时候写入二进制文件中 速度很快
  ### 核心模块
  - 运行时动态加载 速度慢一些
  # 加载流程
  - 路径分析: 根据标识符确定模块位置
  - 文件定位: 确认模块具体文件及文件类型
  - 编译执行: 采用对应方式进行文件编译执行
  ### 路径分析
  执行require时 遍历module.path 中所有node_module 如果没有找到就抛出异常
  ### 文件分析
  - 项目下存在m1.js模块,导入时使用require('m1')语法时
  - 分别顺序m1.js -> m1.json -> m1.node
  - 如果都没有 node认为自己拿到的是一个目录也就是一个包 会查找package.json文件 使用JSON.parse()解析路径
  - 取出描述文件的main文件 如果这个时候main文件也没有拓展名
  - 会依次main.js -> main.json ->main.node 进行查找 
  - 如果没有package.json文件 将index作为目标模块中的具体文件名
  ### 编译和执行
  ### 缓存优先
  - 提高模块的加载速度
  - 如果当前缓存中有我们要的加载模块 就直接从缓存中取
  - 如果没有的或就完整的执行下加载流程
  - 加载完成后 会使用路径作为索引进行缓存

  ### vm
  #### 将字符串按照jszhixing
  - 1. evel(str)
  - 2. 
  ```js
    const fn = new Function('age','return age++')
    fn()
  ```
  - 3. vm.runInThisContext(str)

  # 模拟node模块加载
  ## 核心逻辑
  - 1. 路径分析
  - 2. 缓存优化
  - 3. 文件类型判断
  - 4. 编译执行
  ps: code module-require

