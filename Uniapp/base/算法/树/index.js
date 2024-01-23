let tree = {
    val: 'A',
    left: {
        val: 'B',
        left: {
            val: 'D',
        },
    right: {
        val: 'E',
        }
    }
}

function TreeNode(val, left, right){
    this.val = val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const node = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)

node.left = node2
node.right = node3

console.log(node);
