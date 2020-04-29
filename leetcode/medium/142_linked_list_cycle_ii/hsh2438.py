"""
https://leetcode.com/problems/linked-list-cycle-ii/
Runtime: 48 ms, faster than 79.57% of Python3 online submissions for Linked List Cycle II.
Memory Usage: 16.9 MB, less than 100.00% of Python3 online submissions for Linked List Cycle II.
"""


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        
        current = head
        while current:
            if hasattr(current, 'visited'):
                return current
            else:
                current.visited = True
                current = current.next
        return None
        
