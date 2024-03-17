let obj = {
    a: 1,
    b: 2,
}

let n = obj.a
Object.defineProperty(obj, 'a', { // 数据劫持
    get() {
        return n
    },
    set(newVal){
        n = newVal
    },
    enumerable: true, // 可枚举
    writable: true, // 可写
    value: 100, // 默认值
    configurable: true // 可配置
})

console.log(obj.a);