function foo(n, m) {
    console.log(this.a, n, m);
}

var obj = {
    a: 2
}

// this 显示绑定
foo.call(obj, 100, 200)
foo.apply(obj, [100, 200]) // apply 要用数组类型接收
var bind = foo.bind(obj, 100, 200) // bind 返回一个函数体，执行需调用这个函数
bind()