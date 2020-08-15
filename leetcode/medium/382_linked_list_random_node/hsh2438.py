"""
https://leetcode.com/problems/linked-list-random-node/
Runtime: 76 ms, faster than 86.71% of Python3 online submissions for Linked List Random Node.
Memory Usage: 16.9 MB, less than 16.67% of Python3 online submissions for Linked List Random Node.
"""


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


import random


class Solution:

    def __init__(self, head: ListNode):
        """
        @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
        """
        
        self.head = head
        self.len = 0
        
        current = head
        while current:
            self.len += 1
            current = current.next

    def getRandom(self) -> int:
        """
        Returns a random node's value.
        """
        value = random.randint(0, self.len-1)
        
        current = self.head
        
        for _ in range(value):
            current = current.next
        
        return current.val
        

# Your Solution object will be instantiated and called as such:
# obj = Solution(head)
# param_1 = obj.getRandom()
