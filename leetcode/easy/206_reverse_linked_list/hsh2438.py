"""
https://leetcode.com/problems/reverse-linked-list
Runtime: 36 ms, faster than 96.13% of Python3 online submissions for Reverse Linked List.
Memory Usage: 14.8 MB, less than 31.82% of Python3 online submissions for Reverse Linked List.
Next challenges:
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        curr = head
        prev = None
        while curr is not None:
            next_node = curr.next
            curr.next = prev
            prev = curr
            curr = next_node
        head = prev
        return head
