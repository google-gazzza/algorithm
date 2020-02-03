'''
https://leetcode.com/problems/palindrome-linked-list/submissions/
Runtime: 72 ms, faster than 55.26% of Python3 online submissions for Palindrome Linked List.
Memory Usage: 22.6 MB, less than 100.00% of Python3 online submissions for Palindrome Linked List.
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        
        if head is None:
            return True
        
        cur = head
        count = 0
        
        while cur is not None:
            cur = cur.next
            count += 1

        isOdd = count % 2
        count = count // 2
        
        first_half = []
        cur = head
        
        for _ in range(count):
            first_half.append(cur.val)
            cur = cur.next
            
        if isOdd:
            cur = cur.next
            
        for i in range(count):
            if cur.val != first_half[-(i+1)]:
                return False
            cur = cur.next
        
        return True