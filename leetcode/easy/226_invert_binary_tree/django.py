
"""
https://leetcode.com/problems/invert-binary-tree/
Runtime: 28 ms, faster than 64.55% of Python3 online submissions for Invert Binary Tree.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Invert Binary Tree.
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if root is None:
            return None

        temp = root.left
        root.left = self.invertTree(root.right)
        root.right = self.invertTree(temp)

        return root
