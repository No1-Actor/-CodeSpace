// this
// var a = 1
// function foo() {
//     console.log(this.a);
// }
// foo()

// function foo() {
//     var a = 2
//     this.bar()
// }

// var b = 1
// function bar() {
//     console.log(this.b);
// }
// foo()

// this 默认绑定
var b = 1
function foo() {
    function bar() {
        var b = 2
        baz()
    }

    function baz() {
        console.log(this.b); // 指向全局词法作用域
    }
    bar()
}
foo()

