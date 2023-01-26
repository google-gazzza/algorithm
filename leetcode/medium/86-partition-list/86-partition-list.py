# 86-partition-list
# leetcode/medium/86. Partition List
# URL: https://leetcode.com/problems/partition-list/description/
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
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        if not head:
            return head

        left_head = ListNode()
        right_head = ListNode()
        left_node = left_head
        right_node = right_head

        while head:
            if head.val < x:
                left_node.next = head
                left_node = left_node.next
            else:
                right_node.next = head
                right_node = right_node.next
            head = head.next

        right_node.next = None
        left_node.next = right_head.next

        return left_head.next
  