// let a = 1
// function bar(){
//     function foo(){ // foo的词法作用域是bar bar的词法作用域是全局作用域
//         console.log(this.a);
//     }
//     foo()
// }
// bar()

// let obj = {
//     a: 1,
//     foo: foo
// }

// let obj2 = {
//     a: 2,
//     obj: obj
// }

// function foo(){
//     console.log(this.a);
// }

// obj.foo() 
// obj2.obj.foo()