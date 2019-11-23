"""
https://leetcode.com/problems/maximum-depth-of-binary-tree/
Runtime: 40 ms, faster than 97.25% of Python3 online submissions for Maximum Depth of Binary Tree.
Memory Usage: 15 MB, less than 90.62% of Python3 online submissions for Maximum Depth of Binary Tree.
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def maxDepth(self, root: TreeNode) -> int:

        def search(node):

            if node == None:
                return 0
            else:
                return max(1 + search(node.left), 1 + search(node.right))

        return search(root)
