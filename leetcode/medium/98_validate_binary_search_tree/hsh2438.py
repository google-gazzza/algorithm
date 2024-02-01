"""
https://leetcode.com/problems/validate-binary-search-tree/
Runtime: 36 ms, faster than 95.75% of Python3 online submissions for Validate Binary Search Tree.
Memory Usage: 15.7 MB, less than 62.07% of Python3 online submissions for Validate Binary Search Tree.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        if root is None:
            return True
        
        vals = []
        
        def check(root):
            if root.left is not None:
                check(root.left)
            vals.append(root.val)
            if root.right is not None:
                check(root.right)
        
        check(root)
        
        for i in range(1, len(vals)):
            if vals[i] <= vals[i-1]:
                return False
        
        return True
                
        
        
        
            
                
