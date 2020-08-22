"""
https://leetcode.com/problems/rotate-list/
Runtime: 44 ms, faster than 13.08% of Python3 online submissions for Rotate List.
Memory Usage: 13.9 MB, less than 6.45% of Python3 online submissions for Rotate List.
"""


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        
        if head is None:
            return None
        
        vals = []

        current = head
        while current:
            vals.append(current.val)
            current = current.next
        
        new_k = k%len(vals)
        current = new_head = None
        for val in vals[-new_k:]+vals[:-new_k]:
            if new_head:
                temp = ListNode(val)
                current.next = temp
                current = temp
            else:
                current = new_head = ListNode(val)
        
        return new_head
    
