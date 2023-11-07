// 构造函数
// function Person(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex

    // let this = {
    //     name: name,
    //     age: age,
    //     sex: sex
    // }
    // return
// }

// let p = new Person('海军', 18, 'boy')

// console.log(p);

function Pereson(name, age, sex) {
    var that = {}
    that.name = name
    that.age = age
    return that
}
let p1 = new Pereson('程总', 18)
let p2 = new Pereson('新番', 19)
console.log(p1);
console.log(p2);
