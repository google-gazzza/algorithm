"""
https://leetcode.com/problems/minimum-depth-of-binary-tree/
Runtime: 40 ms, faster than 81.28% of Python3 online submissions for Minimum Depth of Binary Tree.
Memory Usage: 14.8 MB, less than 62.16% of Python3 online submissions for Minimum Depth of Binary Tree.
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
        
        def search(root, depth):
            if root.left is None and root.right is None:
                return depth
            elif root.left is None:
                return search(root.right, depth+1)
            elif root.right is None:
                return search(root.left, depth+1)
            else:
                return min(search(root.left, depth+1), search(root.right, depth+1))
        
        return search(root, 1)
        
        
