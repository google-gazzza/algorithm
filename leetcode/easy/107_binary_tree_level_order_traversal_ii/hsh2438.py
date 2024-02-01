"""
https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
Runtime: 32 ms, faster than 73.42% of Python3 online submissions for Binary Tree Level Order Traversal II.
Memory Usage: 13.3 MB, less than 85.19% of Python3 online submissions for Binary Tree Level Order Traversal II.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        
        leaves = {}
        
        def travel(root, depth):
            if root is None:
                return
            
            if depth in leaves.keys():
                leaves[depth].append(root.val)
            else:
                leaves[depth] = [root.val]

            if root.left is not None:
                travel(root.left, depth+1)
            
            if root.right is not None:
                travel(root.right, depth+1)
        
        travel(root, 1)
        
        results = []
        
        for key in sorted(leaves.keys(), reverse=True):
            results.append(leaves[key])
        
        return results
