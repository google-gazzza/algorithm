"""
https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
Runtime: 36 ms, faster than 86.94% of Python3 online submissions for Remove Duplicates from Sorted List II.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Remove Duplicates from Sorted List II.
"""


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


from collections import Counter


class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        
        vals = []
        while head is not None:
            vals.append(head.val)
            head = head.next
        
        counter = Counter(vals)
        new_head = current = None
                
        for val in vals:
            if counter[val] == 1:
                if new_head is None:
                    new_head = current = ListNode(val)
                else:
                    node = ListNode(val)
                    current.next = node
                    current = node
        
        return new_head
        
