function Parent(){
    this.name = 'Tom',
    this.like = [1, 2]
}

Child.prototype = new Parent()
function Child(){
    this.age = 18
}

let child = new Child()

// child.name = 'Jerry' // 实例对象修改不了原型上的属性
child.like.push(3) // 
console.log(child.name);
console.log(child.like);
