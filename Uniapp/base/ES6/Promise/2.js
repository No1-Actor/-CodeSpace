// Promise 函数 解决异步问题
function xq() {
    return new Promise((resolve, reject) => { // Promise() 构造函数
        setTimeout(() => {
            console.log('龙哥相亲了！');
            resolve('相亲成功');  
        }, 2000);
    })
}

function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('龙哥结婚了！');
            resolve('结婚完成')
        }, 1000);
    })
}

function baby() {
    setTimeout(() => {
        console.log('小龙女出生！');
    }, 500)
}

xq()
.then((res) => {
    console.log(res);
    return marry()
})    
.then((res2) => {
    console.log(res2);
    baby()
})

// function a() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('第一');
//             resolve()
//         }, 4000);
//     })
// }

// function b() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('第二');
//         }, 4000);
//     })
// }

// a()
// .then(() => {
//     return b()
// })