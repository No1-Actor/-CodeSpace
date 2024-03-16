class Parent{
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
}

class Child extends Parent{   // class继承 (寄生组合继承法)
    constructor(name){
        super(name)
        this.age = 18
    }
}

const c = new Child('Tom')
console.log(c.name)
console.log(c.getName());