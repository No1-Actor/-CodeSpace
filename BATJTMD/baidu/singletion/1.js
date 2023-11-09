// ES6 class 类
// 类是抽象的概念
class singleDog{
    show(){
        console.log('我是一个单例对象');
    }
}

const s1 = new singleDog()
const s2 = new singleDog()
console.log(s1 === s2);  // 不同的内存空间，值也会不一样
