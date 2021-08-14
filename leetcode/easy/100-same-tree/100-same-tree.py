"""
100-same-tree
leetcode/easy/100. Same Tree
Difficulty:easy
URL: https://leetcode.com/problems/same-tree/
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, a, b) -> bool:
        aList = []
        self.getTree(a, aList)
        bList = []
        self.getTree(b, bList)

        return aList == bList

    def getTree(self, head, list):
        if head is None:
            return

        list.append(head.val)

        if head.left is not None:
            self.getTree(head.left, list)
        else:
            list.append(None)

        if head.right is not None:
            self.getTree(head.right, list)
        else:
            list.append(None)
