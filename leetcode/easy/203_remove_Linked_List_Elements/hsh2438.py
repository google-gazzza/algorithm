"""
https://leetcode.com/problems/remove-linked-list-elements/
Runtime: 68 ms, faster than 73.48% of Python3 online submissions for Remove Linked List Elements.
Memory Usage: 17.1 MB, less than 5.55% of Python3 online submissions for Remove Linked List Elements.
"""


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        
        current = prev = head
        
        while current:
            if current.val == val:
                if current == head:
                    head = current = current.next
                    continue
                else:
                    prev.next = current.next
                    current = current.next
            else:
                if not current == prev:
                    prev = prev.next
                current = prev.next
        
        return head
                    
