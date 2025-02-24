// * Example:
// * var li = ListNode(5)
// * var v = li.`val`
// * Definition for singly-linked list.
class ListNode(var `val`: Int) {
    var next: ListNode? = null
}


class Solution {
    fun plusOne(head: ListNode?): ListNode? {
        var arr = mutableListOf<ListNode>()

        var carry = 0
        var node = head

        while (node != null) {
            arr.add(node)
            node = node.next
        }

        arr[arr.size - 1].`val` += 1

        for (i in arr.size - 1 downTo 0) {
            arr[i].`val` = (arr[i].`val` + carry)
            carry = (arr[i].`val` + carry) / 10
            arr[i].`val` %= 10
        }

        if (carry > 0) {
            var newHead = ListNode(carry)
            newHead.next = head
            return newHead
        }

        return head
    }
}
