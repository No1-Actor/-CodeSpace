## 蔚来面试

## 一面
- 前端理解
- 怎么学习
- 项目上线
- 样式布局
- 登录 jwt token session

## 二面
性格

提前去思考这些问题，整理话术，互相模拟面试

## B站
不用追问 自问自答

- git命令
  git init ... git push
  git rebase 变量

- vue 响应式原理 ref reactive
  - proxy(对象)
  - defineProperty(属性)
  - vue2 / vue3 区别
        数组 增改
  - 追问，依赖收集
  - watcher

- 调试自己的代码
  - 断点 逐步跟踪 变量的值
  - console.log
  - vue devtool 数据状态与界面
  - console.time console.timeEnd() 性能优化
  - 浏览器自带性能面板
  - postman 模拟请求 测试接口 restful
        API风格 Method + url 一切皆资源
        GET / POST 读
        POST  写 /post/:id
        DELETE 删除
        PUT / PATCH  修改 PUT 文件上传修改改头像  PATCH 部分修改改字段
        OPTIONS 

- 状态码 深入
  - 304 实现

- node stream
  - java 二进制流

- vuex/pinia
  - 父子/兄弟组件通信之外 让状态在任何组件之间共享
  - store 
        应用 = 状态管理 + UI组件 组件更专注于界面开发
  - 购物车 / 登录
  - pinia 持久化管理
  - vuex 缺点 不太好理解 mutations
  - pinia 优点 函数化 灵活 对ts支持更好

- 持久化
  localStronge + JSON.parse() JSON.stringify()
- JWT
- 深度优先搜索 DFS   广度优先 BFS
- AIGC 快速学习 高效学习

- 生命周期
    圈
    父子
    父 created
    子 created
    父 mounted
    子 mounted

总结：
    top20的面试难度主要在于全面的基础能力 算法、vue、基础、JS/CSS、八股

- 树的遍历
  - 用递归的概念来定义一棵树
  - 先、中、后 根节点 
  - BFS、DFS 

    - 深度优先 

- 列表组装成树状态结构
  - 经典题
  - 树型 
  - 常见困难开发点拿出来
      - 多级菜单  省县市选择的需求
      - 列表 后端传过来的数据项 一条记录
      - 任务 拼成树型结构
          显示菜单 切换地址选项等树型操作
      - 二重for 循环 O(n^2)

- 编写一个类EventEmitter,实现自定义事件
  - 前端 addEventListener click 内置事件
  - 订阅-发布者模式 经典的设计模式
  - 实现一个EventEmitter 类 on emit off once
  - node 内置了EventEmitter 可以直接继承使用