"""
https://leetcode.com/problems/binary-tree-paths/
Runtime: 36 ms, faster than 11.09% of Python3 online submissions for Binary Tree Paths.
Memory Usage: 12.6 MB, less than 100.00% of Python3 online submissions for Binary Tree Paths.
"""



# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def binaryTreePaths(self, root: TreeNode) -> List[str]:
        ttl = []
        
        self.recursiveTreePath(root,'',ttl)
        
        return ttl
    
    def recursiveTreePath(self, root,cur,ttl):
        if root is None:
            return None
        
        if root.left is None and root.right is None:
            ttl.append(cur + str(root.val))
            return None
        
        if root.left:
            self.recursiveTreePath(root.left,cur + str(root.val) + "->",ttl)
        
        if root.right:
            self.recursiveTreePath(root.right,cur + str(root.val) + "->",ttl)
