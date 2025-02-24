
"""
leetcode/easy/160. Intersection of Two Linked Lists
Difficulty: easy
URL: https://leetcode.com/problems/intersection-of-two-linked-lists/
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, head_a, head_b):
        list_a = []
        list_b = []

        while head_a:
            list_a.append(head_a)
            head_a = head_a.next

        while head_b:
            list_b.append(head_b)
            head_b = head_b.next

        list_a = list_a[::-1]
        list_b = list_b[::-1]
        list_a.append(None)
        list_b.append(None)

        last = None

        for a, b in zip(list_a, list_b):
            print(a,b)
            if a != b:
                return last
            last = a

        return "No intersection"

