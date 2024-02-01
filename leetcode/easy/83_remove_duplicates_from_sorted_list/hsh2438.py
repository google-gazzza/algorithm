"""
https://leetcode.com/problems/remove-duplicates-from-sorted-list/
Runtime: 40 ms, faster than 68.60% of Python3 online submissions for Remove Duplicates from Sorted List.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Remove Duplicates from Sorted List.
"""


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if head == None:
            return head
        
        previous = head
        current = head.next
        while current:
            if current.val == previous.val:
                previous.next = current.next
                current = current.next
            else:
                previous = current
                current = current.next

        return head
