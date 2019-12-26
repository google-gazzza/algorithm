"""
https://leetcode.com/problems/linked-list-cycle/
Runtime: 56 ms, faster than 50.42% of Python3 online submissions for Linked List Cycle.
Memory Usage: 16 MB, less than 100.00% of Python3 online submissions for Linked List Cycle.
"""


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:        
        current = head
        while current:
            try:
                if current.visited:
                    return True
            except:
                current.visited = True
            current = current.next
        return False
