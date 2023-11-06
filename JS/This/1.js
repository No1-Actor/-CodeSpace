// console.log(this);

// var a = 1
// console.log(window.a);

function identify() {
    return this.name.toUpperCase()      //toUpperCase将小写字符串转换为大写
}

function speek() {
    var greeting = "hello, I'am " + identify.call(this)
    console.log(greeting);
}

var me = {
    name: 'Tom'
}

var you = {
    name: 'Jerry'
}

// console.log(identify());
speek.call(me)