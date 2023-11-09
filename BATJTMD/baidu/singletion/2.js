// ES6 class 企业级开发，大型项目
class SingleDog {
    // 属于对象
    show() {
        console.log('我是一个单例对象');
    }
    // 不要直接new 
    // 属于类的
    static getInstance() {
        // console.log('静态方法');
        if (!SingleDog.instance) {
            SingleDog.instance = new SingleDog();
        }
        return SingleDog.instance;
    }
}

// new 过程 不同内存
// s1 s2 里的值 是地址
// 先生成一个地址，然后再new去判断一下，如果已经有了，就不用再new了
// 单例模式
const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()
console.log(s1 === s2);