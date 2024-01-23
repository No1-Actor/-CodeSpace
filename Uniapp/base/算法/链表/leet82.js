// 删除排序链表中的重复元素 II

var deleteDuplicates = function(head) {
    if(!head) return head
    let dummy = new ListNode()
    dummy.next = head
    let cur = dummy
    while(head && head.next){
        if(head.val === head.next.val){
            while(head.next && head.val === head.next.val){
                head = head.next
            }
            cur.next = head.next
        }else{
            cur = cur.next
        }
        head = head.next
    }
    return dummy.next
}