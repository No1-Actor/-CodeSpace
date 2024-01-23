let flag = false

function a() {
    setTimeout(() => {
    console.log('阿臻');
    // 使用回调函数
        b()
    }, 1000);
}

function b() {
    setTimeout(() => {
    console.log('10亩地');
    }, 500);
}

a()
b()

