// 消耗时间执行叫做异步
function a() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('a');
        resolve()  
    }, 1000);
    })
}

function b() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('b');
        reject()    // 返回一个错误信息
    }, 500);
    })
}

function c() {
    console.log('c');    
}

// Promise.all([a(), b()])  // all 必须要接收到的所有的promise状态都为resolve，then才会执行
// .then(c)

// a()
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);   
// })

Promise.race([a(), b()])  // race 必须要接收速度最快的
.then(c)
.catch((err) => {
    console.log(err);
})