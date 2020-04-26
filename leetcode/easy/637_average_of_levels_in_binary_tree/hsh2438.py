"""
https://leetcode.com/problems/average-of-levels-in-binary-tree/
Runtime: 52 ms, faster than 51.71% of Python3 online submissions for Average of Levels in Binary Tree.
Memory Usage: 15.9 MB, less than 7.14% of Python3 online submissions for Average of Levels in Binary Tree.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def averageOfLevels(self, root: TreeNode) -> List[float]:
        
        tree = {}
        
        def travel(root, level):
            if root is None:
                return
            
            if level in tree.keys():
                tree[level].append(root.val)
            else:
                tree[level] = [root.val]
            
            if root.left is not None:
                travel(root.left, level+1)
            
            if root.right is not None:
                travel(root.right, level+1)
                
        travel(root, 1)
        
        return [sum(tree[key])/len(tree[key]) for key in sorted(tree.keys())]
                
        
