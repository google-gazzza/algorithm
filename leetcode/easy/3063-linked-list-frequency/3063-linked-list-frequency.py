# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def frequenciesOfElements(self, head: Optional[ListNode]) -> Optional[ListNode]:
        frequency = {}

        while head:
            if head.val in frequency:
                frequency[head.val] += 1
            else:
                frequency[head.val] = 1

            head = head.next

        result = ListNode()
        resultHead = result

        for key, value in frequency.items():
            result.next = ListNode(value)
            result = result.next

        return resultHead.next

