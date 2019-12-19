"""
https://leetcode.com/problems/remove-duplicates-from-sorted-list/
Runtime: 32 ms, faster than 98.41% of Python3 online submissions for Remove Duplicates from Sorted List.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Remove Duplicates from Sorted List.
"""


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        
        cur = head
        
        while(cur):
            if cur.next is not None and cur.val == cur.next.val:
                cur.next = cur.next.next
            else:
                cur = cur.next
                
        return head
       
