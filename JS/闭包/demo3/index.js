// 作用域链
function bar() {
    console.log(myName);
}

function foo() {
    var myName = '龙'
    bar()
}

var myName = '君'
foo()