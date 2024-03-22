function Parent(name) {
    this.name = name;
}

function Child(name, age) {
    Parent.call(this, name); // 调用父类构造函数，传递参数
    this.age = age;
}

var child1 = new Child('Tom', 18);
