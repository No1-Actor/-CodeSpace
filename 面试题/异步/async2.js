function request(num){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(num * 10)
        },1000)
    })
}

function* gen(){
    const num1 = yield request(1)
    const num2 = yield request(num1)
    const num3 = yield request(num2)
    return num3
}

// 模拟async
function generatorToAsync(generatorFn){ // 把generatorFn变成具有异步能力的函数
    const gen = generatorFn()

    return function () { 
            const gen = generatorFn()
            
            return new Promise((resolve,reject) => {
                function loop(key, arg){
                    let res = null
                    res = gen[key](arg)
                    const {value,done} = res
                    if(done){ // 递归出口
                        resolve(value) // 返回值
                        return
                    }else{
                        Promise.resolve(value).then(val => loop('next', val)) 
                    }
                }
                loop('next')
            })
        }
    }
const asyncFn = generatorToAsync(gen)
console.log(asyncFn);