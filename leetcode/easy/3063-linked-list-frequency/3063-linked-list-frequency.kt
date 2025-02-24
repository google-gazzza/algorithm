//Example:
//var li = ListNode(5)
//var v = li.`val`
//Definition for singly-linked list.
class ListNode(var `val`: Int) {
    var next: ListNode? = null
}


class Solution {
    fun frequenciesOfElements(head: ListNode?): ListNode? {
        var frequencies = mutableMapOf<Int, Int>()

        var current = head

        while (current != null) {
            if (frequencies.containsKey(current.`val`)) {
                frequencies[current.`val`] = frequencies.getOrDefault(current.`val`, 0) + 1
            } else {
                frequencies[current.`val`] = 1
            }
            current = current.next
        }

        var result = ListNode(0)
        var resultCurrent = result

        for ((key, value) in frequencies) {
            resultCurrent.next = ListNode(value)
            resultCurrent = resultCurrent.next!!
        }

        return result.next
    }
}
