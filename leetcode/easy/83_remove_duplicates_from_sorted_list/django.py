"""
https://leetcode.com/problems/remove-duplicates-from-sorted-list/
Runtime: 40 ms, faster than 84.09% of Python3 online submissions for Remove Duplicates from Sorted List.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Remove Duplicates from Sorted List.
"""
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        
        tempNode = None
        cur = start = head
        
        if not head:
            return None
        
        while cur.next != None:
            if tempNode:
                if tempNode.val == cur.next.val:
                    cur = cur.next
                else:
                    tempNode.next = cur.next
                    tempNode = None
                    cur = cur.next
            else:
                if cur.val == cur.next.val:
                    tempNode = cur
                    cur = cur.next
                else:
                    cur = cur.next

        if tempNode is not None:
            tempNode.next = None
        
        return start
        
