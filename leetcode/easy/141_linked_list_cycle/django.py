"""
https://leetcode.com/problems/linked-list-cycle/
Runtime: 48 ms, faster than 78.05% of Python3 online submissions for Linked List Cycle.
Memory Usage: 16 MB, less than 100.00% of Python3 online submissions for Linked List Cycle.
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        slower = faster = head
        try:
            while True:
                slower = slower.next
                faster = faster.next.next

                if slower is faster:
                    return True

        except:
            return False


