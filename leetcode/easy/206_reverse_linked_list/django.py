"""
https://leetcode.com/problems/reverse-linked-list/
Runtime: 1120 ms, faster than 5.73% of Python3 online submissions for Reverse Linked List.
Memory Usage: 17.3 MB, less than 22.73% of Python3 online submissions for Reverse Linked List.
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:

        if head is None:
            return None

        if head.next is None:
            return head

        cur = head

        while cur.next.next is not None:
            cur = cur.next

        slast, last = cur, cur.next
        slast.next = None
        last.next = self.reverseList(head)

        return last

