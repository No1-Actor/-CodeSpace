var obj = {
    a: 1,
    foo: foo
}
function f00() {
    console.log(this.a);
}
// foo.call(obj)

Function.prototype.myCall = function (context) {
    if(typeof this !== 'function'){
        throw new TypeError('myCall is not a function')
    }
    // let args = Array.from(arguments).slice(1) // 将类数组转变为数组
    let args = [...arguments].slice(1) // 将类数组转变为数组


    context.fn = this
    let res = context.fn(...args)  // 触发this隐式绑定规则
    delete context.fn
    return res
}
foo.myCall(obj)
console.log(obj);