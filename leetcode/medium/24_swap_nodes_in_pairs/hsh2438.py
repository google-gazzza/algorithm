"""
https://leetcode.com/problems/swap-nodes-in-pairs/
Runtime: 32 ms, faster than 34.17% of Python3 online submissions for Swap Nodes in Pairs.
Memory Usage: 14 MB, less than 6.06% of Python3 online submissions for Swap Nodes in Pairs.
"""


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        new_head = None
        new_current = None
        current = head

        while current and current.next:
            temp_a = ListNode(current.val)
            temp_b = ListNode(current.next.val)
            temp_b.next = temp_a

            if new_head:
                new_current.next = temp_b
            else:
                new_head = temp_b

            new_current = temp_a
            current = current.next.next

        if current:
            if new_head:
                new_current.next = ListNode(current.val)
            else:
                new_head = ListNode(current.val)

        return new_head
