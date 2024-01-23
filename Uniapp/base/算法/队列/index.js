// 栈
// let stark = []

// 队列
let queue = [] // 只能用push和shift 先进先出

queue.push('a')
queue.push('b')
queue.push('c')

while(queue.length) {
  const top = queue[0]
  queue.shift()
  console.log(top)
}