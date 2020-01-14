"""
https://leetcode.com/problems/balanced-binary-tree/
Runtime: 68 ms, faster than 33.25% of Python3 online submissions for Balanced Binary Tree.
Memory Usage: 16.3 MB, less than 100.00% of Python3 online submissions for Balanced Binary Tree.
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:

    def isBalanced(self, root: TreeNode) -> bool:
        if root is None:
            return True

        if abs(self.height(root.left) - self.height(root.right)) > 1:
            return False

        return self.isBalanced(root.left) and self.isBalanced(root.right)

    def height(self, root):
        if root is None:
            return 0

        return 1 + max(self.height(root.left), self.height(root.right))
