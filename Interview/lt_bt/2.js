// 广度优先
function bfs(root){
    // 队列、FIFO
    const queue = [root];
    while(queue.length){
        const currentNode = queue.shift(); // 从队列中取出一个节点
        console.log(currentNode.value);

        if(currentNode.children){ // 如果有子节点
            currentNode.children.forEach(child => { // 将子节点加入队列
                queue.push(child);
            });
        }
    }
}