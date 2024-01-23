// 深拷贝
let obj = {
    name: '啊伟',
    age: 18,
    like: {
        type: 'coding'
    },
    a: undefined,
    b: null,
    c: Symbol('c'),
    d: function () {},
}

let newObj = JSON.parse(JSON.stringify(obj)) // 深拷贝 对象转字符串，再转对象 
newObj.like.type = 'reading'
console.log(obj.like.type); // coding