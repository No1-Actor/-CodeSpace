# 1. js数组有哪些方法?
1. 增
push unshift splice(起始位置，删除的个数，要插入的元素) concat(数组拼接)
2. 删
pop shift slice(起始位置，结束位置) splice() filiter()
3. 改
sort() reverse() replace()
4. 查
indexOf() lastIndexOf() includes() find(回调函数3个参数) findIndex()
5. 遍历
forEach() map() filter(回调函数3个参数) reduce(回调函数4个参数) every(回调函数，数组要全部满足条件，every才会返回true) some(回调函数，只要数组有一个满足条件，some就会返回true)
6. 转换
join(数组拼接) toString()

- forEach() map区别:
  1. map会返回一个新的数组
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
任何引用类型转boolean值都为true，除了null和undefined

# 4. 说一说js中的类型转换?
- 是什么?
   js中有原始类型 和 引用类型 的区分

- 显示隐式
    开发中通常需要将一个类型转换为另一个类型时通过调用构造函数实现``显示类型转换``
    当开发中碰到 比较运算法 或 算术运算符时，当符号两边的类型不一致时，js引擎会自动进行``隐式类型转换``
git