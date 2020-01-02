"""
https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
Runtime: 36 ms, faster than 70.06% of Python3 online submissions for Binary Tree Level Order Traversal II.
Memory Usage: 13 MB, less than 100.00% of Python3 online submissions for Binary Tree Level Order Traversal II.
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:

        result = []
        nodelist = []

        nodelist.append((root, 0))

        while nodelist:
            node, level = nodelist.pop(0)

            if node is None:
                continue;

            if level >= len(result):
                result.insert(0, [node.val])
            else:
                result[-1-level].append(node.val)

            nodelist.append((node.left, level + 1))
            nodelist.append((node.right, level + 1))

        return result

