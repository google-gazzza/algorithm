/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 **/

class ListNode(var `val`: Int) {
    var next: ListNode? = null
}


class Solution {
    fun gameResult(head: ListNode?): String {
        var evenCount = 0
        var oddCount = 0
        var cur = head

        while (cur != null) {
            val even = cur.`val`
            val odd = cur.next.`val`

            if (even > odd) {
                evenCount++
            } else if (odd > even) {
                oddCount++
            }

            cur = cur.next.next
        }

        if (evenCount == oddCount) {
            return "Tie"
        }

        return if (evenCount > oddCount) "Even" else "Odd"
    }
}
