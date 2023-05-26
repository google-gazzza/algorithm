# 61-rotate-list
# leetcode/medium/61. Rotate List
# URL: https://leetcode.com/problems/rotate-list/description/
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
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        elements = []

        while head:
            elements.append(head.val)
            head = head.next

        if not elements:
            return None

        k = k % len(elements)
        elements = elements[-k:] + elements[:-k]

        head = ListNode(elements[0])
        node = head

        for i in range(1, len(elements)):
            node.next = ListNode(elements[i])
            node = node.next

        return head
