function* foo(){
    let a = 0
    yield a = 1 // yield 暂停了函数的执行，等待下一次调用next()方法时，再继续执行
    yield a = 2
    console.log(a);
}

// let gen = foo() // 得到一个Generator的实例对象
// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { value: undefined, done: true }

function* g(){
    var o = 1
    yield o++
    yield 
    yield o++
}
let gen1 = g()
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
console.log(gen1.next())
