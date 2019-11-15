"""https://leetcode.com/problems/reverse-linked-list/

Runtime: 28 ms, faster than 27.29% of Python online submissions for Reverse Linked List.
Memory Usage: 13.6 MB, less than 73.15% of Python online submissions for Reverse Linked List.
"""
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        prev = None
        current = head
        while current is not None:
            next_temp = current.next
            current.next = prev
            prev = current
            current = next_temp
        
        return prev
        
