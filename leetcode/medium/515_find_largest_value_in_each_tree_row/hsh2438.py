"""
https://leetcode.com/problems/find-largest-value-in-each-tree-row/
Runtime: 52 ms, faster than 26.51% of Python3 online submissions for Find Largest Value in Each Tree Row.
Memory Usage: 15.6 MB, less than 100.00% of Python3 online submissions for Find Largest Value in Each Tree Row.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def largestValues(self, root: TreeNode) -> List[int]:
        
        dic = {}
        def travel(root, depth):
            if root is None:
                return 
            
            if depth in dic.keys():
                dic[depth].append(root.val)
            else:
                dic[depth] = [root.val]
            
            if root.left is not None:
                travel(root.left, depth+1)
            
            if root.right is not None:
                travel(root.right, depth+1)
        
        travel(root, 1)
        
        results = []
        for key in sorted(dic.keys()):
            results.append(max(dic[key]))
        
        return results
            
