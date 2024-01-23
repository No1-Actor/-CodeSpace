function A() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('A')
            resolve()
        }, 1000)
    })
}

function B() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('B')
            resolve()
        }, 500)
    })
}

function C() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('C')
            resolve()
        }, 100)
    })
}

async function foo() {
    await A() // await 会阻塞后续代码，将后续代码推入微任务队列
    console.log(1);
    await B()
    await C()
}
foo()