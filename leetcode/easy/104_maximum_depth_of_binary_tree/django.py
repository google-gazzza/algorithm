

"""
https://leetcode.com/problems/maximum-depth-of-binary-tree/
Runtime: 32 ms, faster than 98.74% of Python3 online submissions for Maximum Depth of Binary Tree.
Memory Usage: 14.4 MB, less than 96.87% of Python3 online submissions for Maximum Depth of Binary Tree.
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if root is None:
            return 0

        else:
            return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1

