# 148-sort-list
# leetcode/medium/148. Sort List
# URL: https://leetcode.com/problems/sort-list/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List, Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        nodes = []

        while head:
            nodes.append(head)
            head = head.next

        nodes.sort(key=lambda x: x.val)

        head = ListNode(0)
        cur = head

        for node in nodes:
            node.next = None
            cur.next = node
            cur = cur.next

        return head.next
# 148-sort-list
# leetcode/medium/148. Sort List
# URL: https://leetcode.com/problems/sort-list/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List, Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        nodes = []

        while head:
            nodes.append(head)
            head = head.next

        nodes.sort(key=lambda x: x.val)

        head = ListNode(0)
        cur = head

        for node in nodes:
            node.next = None
            cur.next = node
            cur = cur.next

        return head.next
