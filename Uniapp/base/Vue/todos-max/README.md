# 复杂组件设计

Todos

- 组件公式
    UI Component + store
     
- 组件树
    看到页面，先想下组件树划分
    - App
    - TodoList
    - TodoItem UI

- 复杂数组业务组件
  - 数据驱动页面
  - 积累常见的做法
    - todos filterTodos
    - tabs 切换
        - 标记选中的状态 visibility = 'all|active|completed'
        - 动态绑定类名 :class = "{selected: visibility === key}"
        - click 事件 visibility -> 相应的