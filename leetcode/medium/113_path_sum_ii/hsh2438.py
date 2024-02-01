"""
https://leetcode.com/problems/path-sum-ii/
Runtime: 328 ms, faster than 5.44% of Python3 online submissions for Path Sum II.
Memory Usage: 18.4 MB, less than 37.93% of Python3 online submissions for Path Sum II.
"""


import copy


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def pathSum(self, root: TreeNode, target: int) -> List[List[int]]:
        
        paths = []
        
        def search(root, path):
            
            if root is None:
                return 
            
            new_path = copy.deepcopy(path)
            new_path.append(root.val)
            
            if root.left is None and root.right is None:
                paths.append(new_path)
                return
            
            if root.left:
                search(root.left, new_path)
            
            if root.right:
                search(root.right, new_path)
        
        search(root, [])
        
        results = []
        
        for path in paths:
            if sum(path) == target:
                results.append(path)
        
        return results
