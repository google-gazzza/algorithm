"""
https://leetcode.com/problems/middle-of-the-linked-list/

Runtime: 16 ms, faster than 99.54% of Python3 online submissions for Middle of the Linked List.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Middle of the Linked List.
"""
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        walker = head
        runner = head
        while runner:
            runner = runner.next
            if runner:
                walker = walker.next
                runner = runner.next
        return walker