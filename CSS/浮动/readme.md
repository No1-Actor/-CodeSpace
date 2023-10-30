# 块级
1. 默认占据一整行
2. 可以设置宽高 

# 行内块
1. 可以同行显示
2. 可以设置宽高

# 行内
1. 可以同行显示
2. 不可以设置宽高

# 浮动
1. 脱离文档流
2. 文字环绕
3. 让块级元素同行显示
4. 让行内元素可以设置宽高
5. 可以使用margin但不能使用margin：0 auto 

# 清除浮动
1. 给父容器设置高度
2. 在最后一个浮动元素之后添加新的元素，在新的元素上做 清除浮动
3. 在容器伪元素after上做 清除浮动
4. 在下方被浮动影响的容器上做 清除浮动
5. BFC

# BFC 容器  Block Formatting Context 块级格式化上下文
- 哪些属性可以创建BFC：
1. float: left || right 
2. position: absolute || fixed
3. display: inline-block
4. display: table-cell ....（表格布局）
5. overflow: hidden || auto || overly（覆盖） || scroll（滚动）
6. 弹性盒子（display：flex || inline-flex）

- BFC的特点：
1. BFC容器在计算高度时，会将浮动元素的高度也计算内
2. 解决内外margin重叠问题
