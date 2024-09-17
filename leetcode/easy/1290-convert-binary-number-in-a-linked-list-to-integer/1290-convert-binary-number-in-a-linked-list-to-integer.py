"""
1290-convert-binary-number-in-a-linked-list-to-integer
leetcode/easy/1290. Convert Binary Number in a Linked List to Integer
Difficulty: easy
URL: https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
"""

class Solution:
    def getDecimalValue(self, head) -> int:
        values = []

        while head:
            values.append(str(head.val))
            head = head.next

        return int(''.join(values), 2)
