# leetcode/medium/82. Remove Duplicates from Sorted List II
# 82-remove-duplicates-from-sorted-list-ii
# URL: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
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
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        new_head = ListNode()
        cur = new_head

        while head is not None:
            last_val = head.val
            is_duplicate = False

            while head.next is not None and head.next.val == last_val:
                head = head.next
                is_duplicate = True

            if is_duplicate == True:
                head = head.next
                continue

            cur.next = ListNode(head.val)
            cur = cur.next
            head = head.next

        return new_head.next
