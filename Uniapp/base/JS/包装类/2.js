let obj = {
    name: '丁总',
    age: 18
}

// console.log(obj['name']);
// obj.girlFriend = '翠花'
let girl = 'girlFriend'
obj[girl] = '小红'

delete obj[girl]

console.log(obj); 