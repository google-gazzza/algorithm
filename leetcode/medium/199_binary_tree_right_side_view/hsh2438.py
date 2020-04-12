"""
https://leetcode.com/problems/binary-tree-right-side-view/
Runtime: 28 ms, faster than 81.65% of Python3 online submissions for Binary Tree Right Side View.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for Binary Tree Right Side View.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        
        right_side = {}
        
        def right_side_view(root, level):
            if root is None:
                return
            
            right_side[level] = root.val
            
            if root.left is not None:
                right_side_view(root.left, level+1)
            
            if root.right is not None:
                right_side_view(root.right, level+1)
            
        right_side_view(root, 1)
        return [right_side[key] for key in sorted(right_side.keys())]
