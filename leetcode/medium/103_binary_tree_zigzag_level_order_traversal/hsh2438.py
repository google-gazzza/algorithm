"""
https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
Runtime: 36 ms, faster than 17.81% of Python3 online submissions for Binary Tree Zigzag Level Order Traversal.
Memory Usage: 14.1 MB, less than 5.41% of Python3 online submissions for Binary Tree Zigzag Level Order Traversal.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        
        dic = {}
        
        def traversal(root, level):
            if root is None:
                return
            
            if level in dic.keys():
                dic[level].append(root.val)
            else:
                dic[level] = [root.val]
                
            if root.left is not None:
                traversal(root.left, level+1)
            
            if root.right is not None:
                traversal(root.right, level+1)
            
        traversal(root, 1)
        
        return [dic[key] if key%2 else list(reversed(dic[key])) for key in sorted(dic.keys())]
            
