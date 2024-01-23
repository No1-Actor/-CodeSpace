let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 有序列表线性结构

let res = {
    val: 1,
    next: {
        val: 2,
        next: {}
    }
}

function ListNode() {
    this.val = val;
    this.next = null;
}

const node1 = new ListNode(1);
node1.next = new ListNode(2);

const node2 = new ListNode(3);
node2.next = new ListNode(4);
node1.next = node2;
node1.next = node2.next;