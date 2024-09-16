# leetcode/medium/445. Add Two Numbers II
# 445-add-two-numbers-ii
# URL: https://leetcode.com/problems/add-two-numbers-ii/description/?envType=study-plan-v2&id=programming-skills
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
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        left = []
        right = []

        while l1:
            left.append(l1)
            l1 = l1.next

        while l2:
            right.append(l2)
            l2 = l2.next

        if len(left) < len(right):
            left, right = right, left

        carry = 0

        for i in range(len(left)):
            if len(right) - (i + 1) >= 0:
                left[len(left) - (i + 1)].val += right[len(right) - (i + 1)].val

            left[-(i + 1)].val += carry
            carry = left[-(i + 1)].val // 10
            left[-(i + 1)].val %= 10

        if carry:
            left.insert(0, ListNode(carry))
            left[0].next = left[1]

        return left[0]
