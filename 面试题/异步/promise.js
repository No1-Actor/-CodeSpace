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

    then(onFulfilled, onRejected){
        // 把onFullfilled 存起来，供resolve 调用
        
    }
}


let p = new MyPromise((resolve, reject) => {
    resolve('1')
    reject('2')
})


console.log(p);