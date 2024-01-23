var arr = []

// 闭包
for (var i = 0; i < 10; i++) { // var i 是全局作用域 
    (function a(j) {
        arr[i] = function () {
            console.log(j);
        }
    })(i)
}

for (var j = 0; j < arr.length; j++) {
    arr[j]() // 调用函数
}


function foo() {
}

foo(1)