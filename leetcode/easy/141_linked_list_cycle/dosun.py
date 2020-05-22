"""
https://leetcode.com/problems/linked-list-cycle/

Runtime: 1308 ms, faster than 5.15% of Python3 online submissions for Linked List Cycle.
Memory Usage: 16 MB, less than 100.00% of Python3 online submissions for Linked List Cycle.
"""
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        nodes = []
        curr = head
        while curr:
            if curr in nodes:
                return True
            else:
                nodes.append(curr)
            curr = curr.next
        return False