"""
83-remove-duplicates-from-sorted-list
leetcode/easy/83. Remove Duplicates from Sorted List
Difficulty: easy
URL: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
"""

# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def deleteDuplicates(self, head):
        cur = head

        while cur and cur.next:
            if cur.val == cur.next.val:
                cur.next = cur.next.next
            else:
                cur = cur.next

        return head
