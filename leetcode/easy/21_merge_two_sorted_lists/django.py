"""
https://leetcode.com/problems/merge-two-sorted-lists/submissions/
Runtime: 32 ms, faster than 96.17% of Python3 online submissions for Merge Two Sorted Lists.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Merge Two Sorted Lists.
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:

        st = cur = ListNode(0)

        while l1 and l2:

            if l1.val < l2.val:
                cur.next = l1
                cur = cur.next
                l1 = l1.next
            else:
                cur.next = l2
                cur = cur.next
                l2 = l2.next

        cur.next = l1 or l2

        return st.next
