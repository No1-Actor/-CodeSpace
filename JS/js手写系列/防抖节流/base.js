function foo() {
    // console.log(arguments); // 类数组 arguments 
    console.log(Array.from(arguments));  // Array.from将类数组转变为数组
}
foo(1, 2)

let arr = [1, 2, 3, 4, 5]
console.log(...arr); // 数组解构