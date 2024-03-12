// 深度优先
function dfs(node){
    console.log(node.val);
    for(let child of node.children){
        dfs(child); // 递归遍历子节点
    }
}