function Car(name){
    this.name = name
    // return
    // 构造函数中 return 是引用类型，原数组会受影响
}

function myNew(...args){
    let obj = {}
    obj.__proto__ = args[0].prototype
    const res = args[0].call(obj, ...args.slice(1))
    return res instanceof Object ? res : obj
}

let car = myNew(Car, 'BMW', 'red')
console.log(car);