let obj = {name: '德玛西亚'}

let ws = new WeakSet(); // WeakSet里面只能放置对象和symbol
ws.add(obj)
// obj = null  // 把obj变为可以回收的变量   手动垃圾回收机制

console.log(ws);  // {}空对象