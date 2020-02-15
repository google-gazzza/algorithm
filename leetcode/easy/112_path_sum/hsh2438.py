"""
https://leetcode.com/problems/path-sum/
Runtime: 48 ms, faster than 21.24% of Python3 online submissions for Path Sum.
Memory Usage: 14.4 MB, less than 100.00% of Python3 online submissions for Path Sum.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def hasPathSum(self, root: TreeNode, sum: int) -> bool:
        
        def recursive(root, sum_path):
            sum_path += root.val
            if root.left is None and root.right is None:
                if sum_path == sum:
                    return True
                else:
                    return False
            elif root.left is None:
                return recursive(root.right, sum_path)
            elif root.right is None:
                return recursive(root.left, sum_path)
            else:
                return recursive(root.left, sum_path) or recursive(root.right, sum_path)
        
        return recursive(root, 0) if root is not None else False
            
                
            
