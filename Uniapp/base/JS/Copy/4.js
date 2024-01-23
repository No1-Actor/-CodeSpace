// 手动实现一个深拷贝
let obj = {
    name: '啊伟',
    age: 18,
    like: {
        type: 'coding'
    }
}

function deepCopy(obj) {
    let objCopy = {}
    for (let key in obj) {
      if(obj.hasOwnProperty(key)) {// 判断key是否是obj自身的属性，而不是原型链上的属性
        if (obj[key] instanceof Object) { // 判断obj[key]是否是引用类型
            objCopy[key] = deepCopy(obj[key])
        } else {
            objCopy[key] = obj[key] // 返回浅拷贝
        }
        }
    }
    return objCopy
}