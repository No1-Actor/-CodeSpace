// 206. 反转链表

var reverseList = function(head) {
    let cur = head
    const dummy = new ListNode()

    while (cur) {
        const next = cur.next
        cur.next = dummy.next
        dummy.next = cur
        cur = next
    
    }
    return dummy.next
}