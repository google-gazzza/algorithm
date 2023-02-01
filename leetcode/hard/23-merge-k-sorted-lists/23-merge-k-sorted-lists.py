# 23-merge-k-sorted-lists
# leetcode/hard/23. Merge k Sorted Lists
# URL: https://leetcode.com/problems/merge-k-sorted-lists/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import Optional, List


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        nodes = []

        for node in lists:
            while node:
                nodes.append(node)
                node = node.next

        nodes.sort(key=lambda x: x.val)

        if len(nodes) == 0:
            return []

        new_head = ListNode(val=nodes.pop(0).val)
        cursor = new_head

        for node in nodes:
            cursor.next = node
            cursor = cursor.next

        cursor.next = None

        return new_head
