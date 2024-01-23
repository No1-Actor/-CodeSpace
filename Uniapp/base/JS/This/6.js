// function foo() {}  // 声明函数

// var bar = function () { // 函数表达式


// 箭头函数
var a = 1

var bar = () => {
    console.log(this.a);  // this 指向window
}
bar()