let obj = {
    a:1,
    b: {
        n:2
    }
}

// 深拷贝
function deepCopy(obj){
    let objClone = Array.isArray(obj) ? [] : {} // 判断是否是数组
    
    for(let key in obj){
        if(!obj.hasOwnProperty(key)){ // 判断是否有key
            if(typeof obj[key] === 'object' && obj[key] !== null){
                objClone[key] = deepCopy(obj[key])
            } else {
                objClone[key] = obj[key]
            }
        }
    }
}

let newObj = deepCopy(obj)

console.log(newObj);