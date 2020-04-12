"""
https://leetcode.com/problems/leaf-similar-trees/
Runtime: 32 ms, faster than 53.03% of Python3 online submissions for Leaf-Similar Trees.
Memory Usage: 13 MB, less than 94.44% of Python3 online submissions for Leaf-Similar Trees.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def get_leaf_sequence(self, root, leaf_sequence):
        if root is None:
            return
        if root.left is not None:
            self.get_leaf_sequence(root.left, leaf_sequence)
        if root.right is not None:
            self.get_leaf_sequence(root.right, leaf_sequence)
        if root.left is None and root.right is None:
            leaf_sequence.append(root.val)
            
        
    def leafSimilar(self, root1: TreeNode, root2: TreeNode) -> bool:
        sequence1 = []
        sequence2 = []
        self.get_leaf_sequence(root1, sequence1)
        self.get_leaf_sequence(root2, sequence2)
    
        return sequence1 == sequence2
       
