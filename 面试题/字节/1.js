let obj = {
    a: 1,
    b: 0,
    c: {
        n: 2
    }
}
Object.defineProperty(obj, 'd',{
    enumerable: false, //设置属性不可枚举
    value: 3,
    writable: true, //设置属性可写
    configurable: true //设置属性可配置
})
console.log(obj.d);
function hasProperty(obj, key){
    // return obj[key] !== undefined // 值为undefined的属性就判断不了
    // return Object.keys(obj).includes(key) // 属性为不可枚举时，判断不了
    // return obj.hasOwnProperty(key) // 只能判断显示属性
    return key in obj // 判断对象所有属性，包括显示和隐式
}

console.log(hasProperty(obj, 'a'));
console.log(hasProperty(obj, 'd'));