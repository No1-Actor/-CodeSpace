//  不加var默认是到全局作用域中

function foo() {
    a = 2
}

foo()

console.log(a);