"""
https://leetcode.com/problems/middle-of-the-linked-list/
Runtime: 28 ms, faster than 58.54% of Python3 online submissions for Middle of the Linked List.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Middle of the Linked List.
"""


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        
        list_len = 0
        
        current = head
        while current:
            current = current.next
            list_len += 1
        
        current = head
        list_len_half = int(list_len/2)
        
        for _ in range(list_len_half):
            current = current.next
        
        return current
