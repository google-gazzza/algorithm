"""
https://leetcode.com/problems/balanced-binary-tree/
Runtime: 48 ms, faster than 81.64% of Python3 online submissions for Balanced Binary Tree.
Memory Usage: 17.7 MB, less than 100.00% of Python3 online submissions for Balanced Binary Tree.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        
        heights = []
        
        def travel(root, height):
            if root is None:
                return height, True
            else:
                left, result1 = travel(root.left, height+1)
                right, result2 = travel(root.right, height+1)
                if abs(left-right) > 1:
                    return max(left, right), False
                else:
                    return max(left, right), result1 & result2
            
        return travel(root, 0)[1]
        
