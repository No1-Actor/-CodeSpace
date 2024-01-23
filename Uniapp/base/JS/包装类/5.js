// 包装类

// var obj = {}
// console.log(obj.a);

// var num = 123
// num.abc = 'hello'
// console.log(num.abc);

// var num = new Number(123)
// num.abc = 'hello'
// console.log(num);
// console.log(num * 2); // 参与运算时会变成数字

// var str = 'abcd'
// console.log(str.length);

// var num = 4
// num.len = 3

// var num = new Number(4)
// num.len = 3
// delete num.len

// new Number(4).len // 隐式包装类 
// console.log(num.len);

// var str = 'abcd'
// str.length = 2
// new String('abcd').length = 2
// console.log(str.length);

// 面试题
var str = 'abc'
str += 1 // 'abc1
var test = typeof(str) // 'string
if (test.length == 6) { // new String(test).length
    test.sign = 'typeof的返回结果可能为String'
    // new String(test).sign = 'typeof的返回结果可能为String'
    // delete
}
console.log(test.sign); // new String(test).sign