# SVG
  绘制分矢量图和像素图
  ## 像素图
  - 像素图是一个个像素拼接而成
  - 因为是像素拼接 因此会有失真现象
  - 代表 canvas
  - 适合做色彩丰富的业务 比如小游戏
  ## 矢量图
  - 矢量图是根据不同数学公式绘制成曲线然后渲染的
  - 因为数学公式可以重新计算 所以不会有失真现象
  - 代表svg
  - 适合做色彩单一的业务 例如柱状图 饼状图等等
  ## 图形
  - rect 矩形
  - circle 圆形
  - ellipse 椭圆
  - line 线
  - drawPolygon 多边形
  ## 属性
  - x x轴位置  x="100" 
  - y y轴位置  y="100"
  - x1 x起始位置    x1="50"
  - x2 x终止位置    x2="450"
  - y1 y起始位置    y1 = '250'  
  - y2 y终止位置    y2 = '250'
  - rx 圆角    rx="10" 
  - ry 圆角    ry="0" 
  - width     width="200" 
  - height    height="200" 
  - cx 圆心x位置  cx="250"
  - cy 圆心y位置  cy="250"
  - r  半径       r = '100' 
  - rx x轴半径 rx = '150'
  - ry y轴半径 rx = '150'
  - points 多边形数据的点坐标 以数组的形式 points="100,100 200,100,250,150,350,400,100,400"
  - textLength 文字长度默认平均分配 textLength='200'
  - transform = 'translate(100,100)'
  - text-anchor 文字位置 text-anchor = 'middle'居中
  ### style 属性
  - fill 填充  fill:#fff;
  - stroke 描边 stroke:#fff;
  - strole-width 描边宽度 stroke-width: 4;



  


  
  
  