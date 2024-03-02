function* g(){
    let a = 1
    let b = yield a++
    console.log(b); 
    let c = yield a++
}
let gen = g()
console.log(gen.next()); // 读取到1，再释放当前yield
console.log(gen.next(3)); // next 可以接收参数，用于指定被我触发的yield 的返回值
console.log(gen.next());
