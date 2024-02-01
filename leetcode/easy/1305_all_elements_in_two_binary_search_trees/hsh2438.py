"""
https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
Runtime: 344 ms, faster than 83.35% of Python3 online submissions for All Elements in Two Binary Search Trees.
Memory Usage: 20.4 MB, less than 100.00% of Python3 online submissions for All Elements in Two Binary Search Trees.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def getAllElements(self, root1: TreeNode, root2: TreeNode) -> List[int]:
        
        results = []
        
        def tree_search(root):
            if root is None:
                return
            results.append(root.val)
            
            if root.left is not None:
                tree_search(root.left)
            
            if root.right is not None:
                tree_search(root.right)
        
        tree_search(root1)
        tree_search(root2)
        
        return sorted(results)
