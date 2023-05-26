"""
112-path-sum
leetcode/easy/112. Path Sum
Difficulty:  easy
URL: https://leetcode.com/problems/path-sum
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root, targetSum, total=None) -> bool:
        if total == targetSum and root is None:
            return True

        if total is None:
            total = 0

        if root is None:
            return False

        total += root.val

        if root.left is not None and root.right is not None:
            return self.hasPathSum(root.left, targetSum, total) or \
                   self.hasPathSum(root.right, targetSum, total)

        if root.left is None:
            return self.hasPathSum(root.right, targetSum, total)
        else:
            return self.hasPathSum(root.left, targetSum, total)
