function fn(a){
    console.log(a); // function a() {}
    var a = 123
    console.log(a); // 123
    function a() {} // 函数声明
    console.log(a); // 123
    var b = function() {} // 函数表达式
    console.log(b); // function () {}
    function d(){}
    var d = a
    console.log(d); // 123
}
AO:{
    // a: undefined 1 function a() {}   123,
    // b: undefined function () {},
    // d: undefined function d() {} 123,
}
fn(1)