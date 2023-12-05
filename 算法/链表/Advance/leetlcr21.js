// LCR 021. 删除链表的倒数第 N 个结点
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 增加虚拟节点为了简化非空代码判定
    let dummyNode = new ListNode(-1);
    dummyNode.next = head;
    let fast = dummyNode,
      slow = dummyNode;
    // 快指针先向前走n步
    while (n > 0 && fast && fast.next) {
      fast = fast.next;
      n--;
    }
    // 快慢指针同步向前齐步走
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
    // 这时候慢指针的next刚好指向倒数第n个结点，将它的next的指向next.next即达到了删除的效果
    slow.next = slow.next.next;
    return dummyNode.next;
  };