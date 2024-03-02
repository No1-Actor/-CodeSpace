class MyPromise {
    constructor(executor){
        this.state = 'pending' // promise的状态
        this.value = undefined // 成功的值
        this.reason = undefined // 失败的值
        this.onFulfilledCallback = [] // 存放成功的回调
        this.onRejectedCallback = [] // 存放失败的回调

        const resolve = (value) => {
            if(this.state === 'pending'){
                this.state = 'fulfilled'
                this.value = value
                // 把then中的回调触发掉
                this.onFulfilledCallback.forEach(cb => cb(value))
            }
        }

        const reject = (reason) => {
            if(this.state === 'pending'){
                this.state = 'rejected'
                this.reason = reason
                this.onRejectedCallback.forEach(cb => cb(reason))
            }
        }

        executor(resolve, reject)

    }

    // then源码
    then(onFulfilled, onRejected){
        // 把onFullfilled 存起来，供resolve 调用
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}

        // 返回一个promise
        const newPromise = new MyPromise((resolve, reject) => {
            if(this.state === 'fulfilled'){  // then前面的promise 对象状态是同步变更完成了
                setTimeout(() => { // 官方是微任务，我们宏任务简化一下
                    try {
                        const result = onFulfilled(this.value) // 执行成功的回调
                        resolve(result) // 应该放result里面的resolve 中的参数
                    } catch (error) {
                        reject(error)
                    }
                })                    
            }         
            if(this.state === 'rejected'){
                setTimeout(() => {
                    try {
                        const result = onRejected(this.reason)
                        resolve(result)
                    } catch (error) {
                        reject(error)
                    }
                })
            }  
            if(this.state === 'pending'){ // 缓存then 中的回调
                this.onFulfilledCallback.push((value) => {
                    setTimeout(() => { // 保障将来onFulfilled 在 resolve 中被调用时是个异步函数
                        try {
                            const result = onFulfilled(value)
                            resolve(result)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
                this.onRejectedCallback.push((reason) => {
                    setTimeout(() => {
                        try {
                            const result = onRejected(reason)
                            resolve(result)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
            }
        })

        return newPromise
    }

    // race源码
    static race (promises){
        return new MyPromise((resolve, reject) => {
            // 看promise 里面的那个对象的状态变更
            for(let i = 0; i < promises.length; i++){
                promises[i].then(resolve, reject)
            }
        })
    }

    // all源码
    static all (promises){
        return new MyPromise((resolve, reject) => {
            // resolve() || reject()
            for (let promise of promises){
                promise.then(
                    (value) => {
                        count++
                        if(count === promises.length){
                            resolve(value)
                        }
                    },
                    (reason) => {
                        reject(reason)
                    }
                )
            }
        })
    }
}

