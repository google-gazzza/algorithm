"""
https://leetcode.com/problems/merge-k-sorted-lists/
Runtime: 4632 ms, faster than 8.62% of Python3 online submissions for Merge k Sorted Lists.
Memory Usage: 16.7 MB, less than 40.91% of Python3 online submissions for Merge k Sorted Lists.
"""


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        if lists == []:
            return None
        
        head = ListNode(float('-inf'))
        head.next = lists[0]
        for li in lists[1:]:
            current = head
            while li is not None and current.next is not None:
                if li.val < current.next.val:
                    temp = ListNode(li.val)
                    temp.next = current.next
                    current.next = temp
                    li = li.next
                else:
                    current = current.next
            if li is not None:
                current.next = li

        return head.next
