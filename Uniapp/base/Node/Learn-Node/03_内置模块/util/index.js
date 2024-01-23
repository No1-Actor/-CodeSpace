const util = require('util')

const obj = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4, 5],
        e: () => {
            console.log(6);
        }
    }
}

// console.log(util.inspect(obj), { depth: 1 });  // inspect() 方法返回 obj 的字符串表示形式

// console.log(util.format('%s:%s','foo', 'bar'));
// console.log(util.format('%d + %d = %d', 1, 2, 3));
// console.log(util.format('hello %j', {name: 'tom'}));

console.log(util.types.isDate(new Date()));