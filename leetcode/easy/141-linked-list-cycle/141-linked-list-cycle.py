"""
141-linked-list-cycle
leetcode/easy
Difficulty:  easy
URL: https://leetcode.com/problems/linked-list-cycle/
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head) -> bool:
        visited_node = []

        if head is None:
            return False

        while not head in visited_node and head.next:
            visited_node.append(head)
            head = head.next

        return head in visited_node

