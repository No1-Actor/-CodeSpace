# 1. js数组有哪些方法?
1. 增
push unshift splice(起始位置，删除的个数，要插入的元素) concat(数组拼接, 不会改变原数组)
2. 删
pop shift slice(起始位置，结束位置,不会改变原数组) splice() 
3. 改
sort() reverse() 
4. 查
indexOf() lastIndexOf() includes(结果返回true/false) find(回调函数3个参数) 
5. 遍历
forEach() map() filter(回调函数3个参数) reduce(回调函数4个参数) every(回调函数，数组要全部满足条件，才会返回true) some(回调函数，只要数组有一个满足条件，就会返回true)
6. 转换
join(数组拼接) toString()

- forEach() map区别:
  1. map会返回一个新的数组，forEach不会返回新数组
  2. return 无法终止forEach循环，forEach中没有 break 和 continue

# 2. 字符串有哪些方法?
1. 增 
concat() padEnd() padStart()
2. 删
slice() substring() substr()
3. 改
replace() repeat() trim(去除两端空格) trimLeft(去除左空格) trimRight(去除右空格) toLowerCase(大写转小写) toUpperCase(小写转大写)
4. 查
includes() indexof() lastIndexof() startsWith(判断是否以某个字符串开头) endsWith(判断是否以某个字符串结尾) 
5. 转换
split() charCodeAt()

# 3. == 和 === 的区别?
{}.toString() 返回由"[object" 和 class 和 "]" 组成的字符串
[].toString() 返回由数组内部元素以逗号拼接的字符串
xx.toString() 直接返回字符串字面量
js中任何引用类型转boolean值都为true，除了null和undefined

# 4. 说一说js中的类型转换?
- 是什么?
    js中有原始类型 和 引用类型 的区分

- 显示隐式
    开发中通常需要将一个类型转换为另一个类型时通过调用构造函数实现``显示类型转换``
    当开发中碰到 比较运算法 或 算术运算符时，当符号两边的类型不一致时，js引擎会自动进行``隐式类型转换``

# 5. 说说深浅拷贝?
- v8为什么要有调用栈？
    因为需要整理维护各个调用栈执行之间的关系
    ![alt text](image.png)
    对象存在堆中
    ![alt text](image-1.png)
    
- 是什么?
    拷贝指的是将一个对象中的元素复制到一个新的对象中，拷贝又分为浅拷贝和深拷贝，浅拷贝只拷贝对象引用地址，深拷贝会层层拷贝每一个属性值，不受原对象修改值的影响

- 浅拷贝常见方法?
    1. Object.assign()
    2. 展开运算符
    3. concat()
    4. slice()

- 深拷贝常见方法?
    1. JSON.parse(JSON.stringify()) (bigInt报错) (symbol、undefined、function不支持) (循环引用报错)
    2. structuredClone(symbol、function不支持) 

  - 函数拷贝
  . 与 [] 区别 

# 6. 说说你对闭包的理解?
- 是什么?
    根据词法作用域的规则，内部函数一定能访问它外部函数的变量，当内部函数对外部函数中的变量存在引用且被提到外部函数之外调用，即使外部函数执行完毕，它的执行上下文也无法被完全销毁，而是会将内部函数引用的变量作为一个集合保留在调用栈中，该集合被称为闭包
    ``集合是闭包``
    ![alt text](image-2.png)

- 作用?
    1. 定义私有变量
    2. 封装模块
    3. 延长变量的生命周期

- 缺点
    1. 内存泄漏(清除的闭包方法 变量变为null)

# 7. 说一说原型
- 是什么?
    原型是一个对象，分为隐式原型和显示原型，``隐式原型``是对象上的 __proto__ 属性，``显示原型``是函数上的 Prototype 属性，当我们要访问一个对象的属性时，js引擎不仅会在对象上查找，还会查找对象的隐式原型，隐式原型层层往上查找，直到找到null。对象的隐式原型 = 创建该对象的构造函数的显示原型

    1. 函数的 __proto === Function.prototype 箭头函数除外
    2. Object.create(null)
    3. arguments

# 8. js中如何实现继承?
  1. 原型链继承 
    缺点: 1. 多个实例之间共用了同一个原型，属性会相互影响
          2. 子类无法给父类传参 
   
  2. 构造函数的继承
    缺点: 1. 无法继承父类原型上的属性

  3. 组合继承(经典继承)
    缺点: 1.父类被调用两次

  4. 原型式继承
  缺点: 1. 多个对象共用了同一个原型，属性会相互影响

  5. 寄生组合继承法

  6. class继承 (寄生组合继承法)

# 9. 说一说你对this的理解?
- 是什么?
  this是函数一个关键字，用于代表函数作用域的指向

- 绑定规则
  1. 默认绑定 -- 函数在哪个词法作用域中生效，this就指向哪个词法作用域，词法作用域要找到底的  函数生效在哪个作用域，this就指向哪个
  2. 隐式绑定 -- 当函数被一个对象所拥有且调用，this指向该对象
  3. 隐式丢失 -- 多个对象链式调用，this指向最近的对象
  4. 显式绑定 -- call apply bind
  5. new绑定 -- this 

- 箭头函数
    箭头函数中没有this，写在箭头函数内this，也是它外层非箭头函数的this