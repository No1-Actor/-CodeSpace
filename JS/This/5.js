// 错误代码
function foo() {
    var a = 1
    
    var bar = function () {
        console.log(this.a);
    }
    var baz = bar.bind(foo)

    setTimeout(baz,1000)
}
foo()