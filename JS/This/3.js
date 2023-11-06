// this 隐式绑定
function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo, // 函数的引用 
    // foo: foo() // 函数的调用
}

var obj2 = {
    a: 3,
    obj: obj,
}
obj.foo()
// obj.foo // undefined
obj2.obj.foo()
