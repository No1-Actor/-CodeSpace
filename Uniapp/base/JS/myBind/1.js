Function.prototype.myBind = function (context, ...args) {
    // 函数 this()
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }

    context = context || window // 如果没有传入context，则默认为window

    // this 丢失了
    let that = this
    return function fn(...innerArgs) {
        if(this instanceof fn) {    // new的方式运行
            return new that(...args, ...innerArgs)
        // 原先的函数执行， this 手动指定为context
         return that.apply(context, [...args, ...innerArgs]) 
        }
    }
}

// function sayHello(x, y, z) {
//     console.log('函数中的', this);
//     console.log('你好', this.name);
//     console.log(x + y + z);
// }

// const arrowFn = () => {}

// let person = {
//     name: '李总'
// }
// arrowFn.myBind(person, 1, 2, 3)();

let bindFn = sayHello.myBind(person, 1 ,2, 3);

console.log(bindFn(3));
