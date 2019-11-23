"""
https://leetcode.com/problems/binary-tree-level-order-traversal/
Runtime: 40 ms, faster than 73.77% of Python3 online submissions for Binary Tree Level Order Traversal.
Memory Usage: 13.3 MB, less than 90.32% of Python3 online submissions for Binary Tree Level Order Traversal.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:

        level_dic = {}

        def search(node, level):
            if node == None:
                return
            else:
                if level in level_dic.keys():
                    level_dic[level].append(node.val)
                else:
                    level_dic[level] = [node.val]
                search(node.left, level + 1)
                search(node.right, level + 1)

        search(root, 1)

        sorted_dic = sorted(level_dic.items(), key=lambda x: x[0])

        return [s[1] for s in sorted_dic]