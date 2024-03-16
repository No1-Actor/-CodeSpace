function foo(){
    let a = 1
    let b = 2
    let c = 3

    // return function bar(){
    //     console.log(a,b);

    // 清除闭包
    // a= null
    // b =null
    
    // }
    // 不仅return可以返回，global,window也可以
    global.bar = function(){
        console.log(a,b);
    }
}

foo()