"""
https://leetcode.com/problems/remove-linked-list-elements/submissions/
Runtime: 72 ms, faster than 27.09% of Python3 online submissions for Remove Linked List Elements.
Memory Usage: 21.8 MB, less than 5.55% of Python3 online submissions for Remove Linked List Elements.
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:

        if head is None:
            return None

        elif head.val == val:
            return self.removeElements(head.next, val)

        cur = head

        while cur.next is not None:
            if cur.next.val == val:
                cur.next = cur.next.next

            else:
                cur = cur.next

        return head

