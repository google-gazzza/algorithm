# 147-insertion-sort-list
# leetcode/medium/147. Insertion Sort Listx
# URL: https://leetcode.com/problems/insertion-sort-list/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head

        copy = []

        while head:
            copy.append(head)
            head = head.next

        dummy = ListNode(0)
        new_head = dummy

        for i in sorted(copy, key=lambda x: x.val):
            dummy.next = ListNode(i.val)
            dummy = dummy.next

        head = new_head.next

        return head
