"""
https://leetcode.com/problems/merge-two-sorted-lists/
Runtime: 32 ms, faster than 95.44% of Python3 online submissions for Merge Two Sorted Lists.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Merge Two Sorted Lists.
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:            
        def add_node(head, current, val):
            if head == None:
                head = current =  ListNode(val)
            else:
                temp = ListNode(val)
                current.next = temp
                current = temp
            return head, current

        head = current = None

        while l1 != None or l2 != None:
            if l1 is None:
                head, current = add_node(head, current, l2.val)
                l2 = l2.next
            elif l2 is None or l2.val >= l1.val:
                head, current = add_node(head, current, l1.val)
                l1 = l1.next
            else:
                head, current = add_node(head, current, l2.val)
                l2 = l2.next

        return head
