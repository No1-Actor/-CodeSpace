// 删除排序链表中的重复元素

var deleteDuplicates = function(head) {
    let cur = head
    while (cur) {
        if (cur.next && cur.val === cur.next.val) {
            cur.next = cur.next.next // 删除cur.next 
        } else {
            cur = cur.next
        }
    }
    return head
}