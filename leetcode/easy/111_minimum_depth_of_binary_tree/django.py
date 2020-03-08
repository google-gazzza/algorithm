"""
https://leetcode.com/problems/minimum-depth-of-binary-tree/
Runtime: 36 ms, faster than 97.34% of Python3 online submissions for Minimum Depth of Binary Tree.
Memory Usage: 13.9 MB, less than 100.00% of Python3 online submissions for Minimum Depth of Binary Tree.
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def minDepth(self, root: TreeNode) -> int:

        if root is None:
            return 0

        nodeList = []
        nodeList.append((root, 1))

        while nodeList:
            node, level = nodeList.pop(0)

            if node is None:
                continue

            if node.left is None and node.right is None:
                return level

            nodeList.append((node.left, level + 1))
            nodeList.append((node.right, level + 1))

        return None

