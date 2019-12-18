"""
https://leetcode.com/problems/same-tree/
Runtime: 24 ms, faster than 95.53% of Python3 online submissions for Same Tree.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Same Tree.
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:

        if p is None and q is None:
            return True

        elif p is None or q is None:
            return False

        elif p.val != q.val:
            return False

        else:
            return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
