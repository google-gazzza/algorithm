data class ListNode(var `val`: Int) {
    var next: ListNode? = null
}

// Runtime: 168 ms, faster than 27.27% of Kotlin online submissions for Merge Two Sorted Lists.
// Memory Usage: 33.7 MB, less than 100.00% of Kotlin online submissions for Merge Two Sorted Lists.
class MergeTwoSortedLists {
    fun mergeTwoLists(l1: ListNode?, l2: ListNode?): ListNode? {
        val head = ListNode(0)
        var current = head

        var left: ListNode? = l1
        var right: ListNode? = l2

        while (left != null && right != null) {
            if (left.`val` < right.`val`) {
                val tmp = left
                left = left.next
                current.next = tmp
            } else {
                val tmp = right
                right = right.next
                current.next = tmp
            }
            current = current.next!!
        }
        current.next = left ?: right
        return head.next
    }
}










