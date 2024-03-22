const get = createGetter()
const set = createSetter()
function createGetter(shallow = false){ // shallow 浅，下一层就不监听了 {a:{b:2}} obj.a.b
    return function get(target, key, receiver){
        // 映射 reflection
        // proxy 做自动的懒代理
        const res = Reflect.get(target, key, receiver) 
        target(target, 'get', key)
        if(isObject(res)){
            return shallow ? res : reactive(res) // 递归代理
        }
        return res
    }
}
// {a:{b:c:3},y:1}
// proxy 优势 懒代理 性能
function createSetter(shallow = false){
    return function set(target, key, value, receiver){
        const res = Reflect.set(target, key, value, receiver)
        return res
    }
}

function createSetter(){

}

export const mutableHandlers = { 
    get,
    set
}

export const shallowReactiveHandlers = {
    get,
    set
}