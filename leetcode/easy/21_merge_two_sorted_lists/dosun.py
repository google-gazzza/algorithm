"""
https://leetcode.com/problems/merge-two-sorted-lists/

Runtime: 40 ms, faster than 23.59% of Python3 online submissions for Merge Two Sorted Lists.
Memory Usage: 13 MB, less than 91.74% of Python3 online submissions for Merge Two Sorted Lists.

"""
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if l1 is None: return l2
        if l2 is None: return l1

        if l1.val < l2.val:
            l1.next = self.mergeTwoLists(l1.next, l2)
            return l1
        else:
            l2.next = self.mergeTwoLists(l1, l2.next)
            return l2