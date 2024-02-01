"""
https://leetcode.com/problems/binary-tree-paths/
Runtime: 32 ms, faster than 54.23% of Python3 online submissions for Binary Tree Paths.
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
        
        results = []
        
        def search(root, path):
            if root is None:
                return
            
            if path == '':
                path += str(root.val)
            else:
                path += '->'+str(root.val)
            
            if root.left is None and root.right is None:
                results.append(path)
                return
            
            if root.left:
                search(root.left, path)
            
            if root.right:
                search(root.right, path)
        
        search(root, '')
            
        return results
