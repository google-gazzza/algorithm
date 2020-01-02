"""
https://leetcode.com/problems/palindrome-linked-list/
Runtime: 72 ms, faster than 74.61% of Python3 online submissions for Palindrome Linked List.
Memory Usage: 22.8 MB, less than 100.00% of Python3 online submissions for Palindrome Linked List.
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def isPalindrome(self, head: ListNode) -> bool:

        temp = []
        while head:
            temp.append(head.val)
            head = head.next

        for i in range(int(len(temp) / 2)):
            if temp[i] != temp[-i - 1]:
                return False

        return True
