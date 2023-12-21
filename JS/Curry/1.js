function add(a, b, c) {
    return a + b + c;
}
// 函数的柯里化
// 有时候不会一次性给到，前端的交互
// js curry 柯里化
// 每次接受一个参数
function curry(fn) {
    // 收集参数 闭包 arr
    // 到位了再运行  arr.length === fn.length fn(...arr)
    // 返回收集参数的函数
    // rest 运算法 args是数组 闭包空间 自由变量
    let judge = (...args) => {  
        if(args.length === fn.length) return fn(...args) // 判断参数个数是否和函数参数个数一致
        return (...arg) => judge( ...args, ...arg )// 返回函数，继续收集参数
        // ...arg 是一个数组，将数组转换成参数传递给judge函数    
    }
    return judge
}

// console.log(add.length); // 打印函数参数数量
// add(1)(2)(3);
const curryAdd = curry(add);
console.log(curryAdd(1)(2)(3));