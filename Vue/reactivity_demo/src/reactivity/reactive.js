// 可读性的接口
// VUE API 比 React好 API的简洁

// 缓存
// vue组件代码可能很长，多人开发
export function reactive(target) {
    // 提升可读性
  return createReactiveObject(target, reactiveHandlers, mutableHandlers)
}
//  proxy 区别于 defineProperty 操作更多，模块化
function createReactiveObject(target, proxyMap, proxyHandlers){ 
    if(typeof target !== 'object'){
        console.warn(`reactive ${target} 必须是一个对象`)
        return target
    }
    const existingProxy = proxyMap.get(target)  
    if(existingProxy){
        console.log('---------cached',target);
        return existingProxy
    }
    const proxy = new Proxy(target, proxyHandlers) 
        proxyMap.set(target, proxy)
        return proxy
}

