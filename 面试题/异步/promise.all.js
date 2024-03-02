function a() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('a')
            console.log('a');
        },1000)
    })
}

function b() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('b')
            console.log('b');
        },500)
    })
}

function c(){
    console.log('c');
}

Promise.all([a(),b()]).then((res) => {
    c();
})
