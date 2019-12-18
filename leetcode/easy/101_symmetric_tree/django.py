"""
https://leetcode.com/problems/symmetric-tree/
Runtime: 32 ms, faster than 85.76% of Python3 online submissions for Symmetric Tree.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Symmetric Tree.
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:

        if root is None:
            return True

        return self.isMirror(root.left, root.right)

    def isMirror(self, left, right):
        if left is None and right is None:
            return True

        elif left is None or right is None:
            return False

        return (left.val == right.val) and self.isMirror(left.left, right.right) and self.isMirror(left.right, right.left)

