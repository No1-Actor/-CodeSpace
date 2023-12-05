// 合并两个有序链表

var mergeTwoLists = function mergeTwoLists(l1, l2) {
    let prehead = new ListNode() 
    let prev = prehead  

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            prev.next = l1 
            l1 = l1.next // l1更新
        } else {
            prev.next = l2
            l2 = l2.next // l2更新
        }
        prev = prev.next // prev更新
    }
    prev.next = l1 === null ? l2 : l1 // l1或l2有一个为空，直接将另一个链表接到prev后面
    return prehead.next
}